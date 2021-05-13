import {FC, useEffect, useRef, useState} from "react";
import {socket} from "@/common/utils/client";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import {withRouter} from 'next/router'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import useToast from "@/common/hooks/useToast";
import Notificiation from "@/common/components/Notifications/Notification";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import DefaultLayout from "@/common/layouts/DefaultLayout";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {getInitialLocale} from "@/translations/getInitialLocale";

interface RoomProps {
	router: any
}

const Room: FC<RoomProps> = ({ roomID, router, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { token } = useAuthGetters()
	const { displayToastInfo } = useToast()
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)
	const [studentID, setStudentID] = useState('')
	const [locale, setLocale] = useState('')

	useEffect(() => {
		if (token) return; // do nothing if the user is logged in
		router.replace("/room", "/", { shallow: true });

		setLocale(getInitialLocale())
	}, [token]);

	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const otherUser = useRef<string>()
	const userStream = useRef<MediaStream>()

	const setStudent = (id: string) => {
		setStudentID(id)
		setDisplayAcceptModal(true)
	}

	const acceptStudent = async () => {
		otherUser.current = studentID
		await sendOffer(studentID)
		setDisplayAcceptModal(false)
	}

	const rejectStudent = () => {
		socket.emit('reject', studentID)
		setStudentID('')
		setDisplayAcceptModal(false)
	}

	const setTeacher = async (otherUserID: string) => {
		otherUser.current = otherUserID
	}

	const sendOffer = async (to: string) => {
		const offer: RTCSessionDescriptionInit = await peerRef.current.createOffer();
		await peerRef.current.setLocalDescription(new RTCSessionDescription(offer));

		socket.emit('offer', { offer, to });
	}

	const answerToOffer = async (offer: RTCSessionDescriptionInit) => {
		await peerRef.current.setRemoteDescription(offer)
		const answer: RTCSessionDescriptionInit = await peerRef.current.createAnswer();
		await peerRef.current.setLocalDescription(new RTCSessionDescription(answer));

		socket.emit('answer', {answer, to: otherUser.current});
	}

	const setAnswerAsLocalDescription = async (answer: RTCSessionDescriptionInit) => {
		await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer))
	}

	const handleICECandidateEvent = (e: RTCPeerConnectionIceEvent) => {
		if (e.candidate) {
			const payload: OfferIcePayload = {
				target: otherUser.current,
				candidate: e.candidate,
			}
			socket.emit("offer-ice-candidate", payload);
		}
	}
	const setICECandidateMsg = async (candidateInit: RTCIceCandidateInit ) => {
		const candidate = new RTCIceCandidate(candidateInit);

		await peerRef.current.addIceCandidate(candidate)
	}
	const handleTrackEvent = (e: RTCTrackEvent) => {
		partnerVideo.current.srcObject = e.streams[0];
	}
	const createPeer = (): RTCPeerConnection => {
		const peer = new RTCPeerConnection()

		peer.createDataChannel('test')
		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent

		return peer
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
			userStream.current = stream

			peerRef.current = createPeer()
			userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
			socket.emit('join-room', roomID)
			socket.on('retrieve-teacher', setTeacher)
			socket.on('student-joined', setStudent)
			socket.on('on-offer', answerToOffer)
			socket.on('on-answer', setAnswerAsLocalDescription)
			socket.on('on-ice-candidate-offer', setICECandidateMsg)

			socket.on('rejected', () => displayToastInfo('Teacher cant accept you for the moment, try later'))
		})

		return () => {
			socket.emit('leave-room', roomID)
		}
	}, [])



	return <LanguageProvider localization={localization}>
		<DefaultLayout locale={locale}>
			<div>
				<audio autoPlay ref={partnerVideo} />
				<BoardContainer />
				<Notificiation onToastClick={() => console.log('notif clicked')}/>
				<ModalAcceptation
					displayAcceptModal={displayAcceptModal}
					handleClose={() => setDisplayAcceptModal(false)}
					acceptStudent={acceptStudent}
					rejectStudent={rejectStudent}
				/>
			</div>
		</DefaultLayout>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.query?.id ?? ''
	const localization = getLocalizationProps(ctx, "room");
	
	return { props: { roomID: id, localization } }
}

export default withRouter(Room)
