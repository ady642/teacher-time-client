import {FC, useEffect, useRef, useState} from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import useToast from "@/common/hooks/useToast";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import useRoutePush from "@/common/hooks/useRoutePush";
import useWebRTC from "@/modules/Room/hooks/useWebRTC";

interface RoomProps {
}

const Room: FC<RoomProps> = ({ roomID, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { displayToastInfo } = useToast()
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)
	const [studentID, setStudentID] = useState('')
	const { goTo } = useRoutePush()

	// WebRTC
	const partnerVideo = useRef<HTMLVideoElement>()
	const peerRef = useRef<RTCPeerConnection>()
	const userStream = useRef<MediaStream>()

	const { createPeer,answerToOffer,sendOffer,
		setAnswerAsLocalDescription,setICECandidateMsg
	} = useWebRTC({ socket, peerRef , partnerVideo, roomID})

	const handleTeacherDisconnection = async () => {
		alert('The teacher is gone')
		await goTo(localization.locale, '/')
	}

	const handleStudentDisconnection = async () => {
		alert('The student is gone')
		await goTo(localization.locale, 'room/create')
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

	const setStudent = async (student: string) => {
		await sendOffer(student)
		setDisplayAcceptModal(false)
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
			userStream.current = stream

			peerRef.current = createPeer()
			userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
			socket.emit('join-room', roomID)

			socket.on('on-join-intent', joinIntent)
			socket.on('on-student-joined', setStudent)

			socket.on('on-answer', setAnswerAsLocalDescription)

			socket.on('on-teacher-leave', handleTeacherDisconnection)
			socket.on('on-student-leave', handleStudentDisconnection)

			socket.on('on-offer', answerToOffer)
			socket.on('on-ice-candidate-offer', setICECandidateMsg)

			socket.on('rejected', () => displayToastInfo('Teacher cant accept you for the moment, try later'))
			socket.on('on-ended-room', () => alert('This room does not exist anymore'))
		})

		return () => {
			userStream.current.getTracks().forEach(track => {
				track.stop();
			});
			peerRef.current.close()
			socket.disconnect()
		}
	}, [])

	return <LanguageProvider localization={localization}>
		<div>
			<audio autoPlay ref={partnerVideo} />
			<BoardContainer
				socket={socket}
			/>
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
	const localization = getLocalizationProps(ctx, "room");

	return { props: { roomID: id, localization } }
}

export default withRouter(Room)
