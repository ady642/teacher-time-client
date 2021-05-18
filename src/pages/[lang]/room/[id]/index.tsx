import {FC, useEffect, useRef, useState} from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import {OfferIcePayload, RTCIceCandidateInit, RTCSessionDescriptionInit} from "@/modules/Room/types";
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import useToast from "@/common/hooks/useToast";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import useRoutePush from "@/common/hooks/useRoutePush";

interface RoomProps {
}

const Room: FC<RoomProps> = ({ roomID, teacherID, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { displayToastInfo } = useToast()
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)
	const [studentID, setStudentID] = useState('')
	const { goTo } = useRoutePush()

	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const otherUser = useRef<string>()
	const userStream = useRef<MediaStream>()

	const handleUserDisconnection = async () => {
		if(teacherID) {
			alert('Error, the teacher is gone')
			await goTo(localization.locale, '/')
		} else {
			alert('The student is gone')
			otherUser.current = null
			setStudentID('')
		}
	}

	const joinIntent = (id: string) => {
		setStudentID(id)
		setDisplayAcceptModal(true)
	}

	const acceptStudent = async () => {
		socket.emit('accept-student', { studentID, roomID })
	}

	const rejectStudent = () => {
		socket.emit('reject-student', studentID)
		setStudentID('')
		setDisplayAcceptModal(false)
	}

	const setTeacher = (otherUserID: string) => {
		otherUser.current = otherUserID
	}

	const setStudent = async (student: string) => {
		otherUser.current = student
		await sendOffer(student)
		setDisplayAcceptModal(false)
	}

	const sendOffer = async (to: string) => {
		console.log('je send loffer à ', to)
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
		console.log('je set lanswser as localdescription')
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
		const peer = new RTCPeerConnection({
			iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
		})

		peer.createDataChannel('test')
		peer.onicecandidate = handleICECandidateEvent
		peer.ontrack = handleTrackEvent

		return peer
	}

	useEffect(() => {
		if(teacherID) {
			setTeacher(teacherID)
		}

		navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
			userStream.current = stream

			peerRef.current = createPeer()
			userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
			socket.emit('join-room', roomID)
			socket.on('on-join-intent', joinIntent)
			socket.on('on-student-joined', setStudent)
			socket.on('on-answer', setAnswerAsLocalDescription)

			socket.on('on-user-leave', handleUserDisconnection)

			socket.emit('student-joined', teacherID)
			socket.on('on-offer', answerToOffer)
			socket.on('on-ice-candidate-offer', setICECandidateMsg)

			socket.on('rejected', () => displayToastInfo('Teacher cant accept you for the moment, try later'))
		})

		return () => {
			userStream.current.getTracks().forEach(track => {
				track.stop();
			});
			socket.disconnect()
		}
	}, [])



	return <LanguageProvider localization={localization}>
		<div>
			<audio autoPlay ref={partnerVideo} />
			<div className={'flex flex-col'}>
				<span>{ socket.id }</span>
				<span>{ otherUser.current }</span>
			</div>
			<BoardContainer />
			<ModalAcceptation
				displayAcceptModal={displayAcceptModal}
				handleClose={() => setDisplayAcceptModal(false)}
				acceptStudent={acceptStudent}
				rejectStudent={rejectStudent}
			/>
		</div>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.query?.id ?? ''
	const teacherID = ctx.query?.teacherID ?? ''
	const localization = getLocalizationProps(ctx, "room");

	return { props: { roomID: id, localization, teacherID } }
}

export default withRouter(Room)
