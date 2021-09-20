import React, {FC, useEffect, useRef} from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import useRoutePush from "@/common/hooks/useRoutePush";
import useWebRTC from "@/modules/Room/hooks/useWebRTC";
import Head from "next/head";

interface RoomProps {
}

const Room: FC<RoomProps> = ({ roomID, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	/*	const [muted, setMuted] = useState(false)

	const toggleMute = () => {
		setMuted(!muted)
		userStream.current.getAudioTracks()[0].enabled = !userStream.current.getAudioTracks()[0].enabled
	}*/

	// WebRTC
	const peers = useRef<{ [id: string]: RTCPeerConnection }>({})
	const partnersVideos = useRef<HTMLAudioElement[]>([])
	const userStream = useRef<MediaStream>()

	const { answerToOffer, sendOffer,
		setAnswerAsRemoteDescription, setICECandidateMsg
	} = useWebRTC({ socket, peers, partnersVideos, roomID, userStream })

	const handleTeacherDisconnection = async () => {
		alert('The teacher is gone')
		await goTo(localization.locale, '/')
	}

	const handleStudentDisconnection = async () => {
		alert('The student is gone')
		//window.location.replace(`${process.env.BASE_URL}/${localization.locale}/room/create`)
	}

	const setStudent = async (newStudent: string) => {
		await sendOffer(newStudent)
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream

			socket.emit('join-room', roomID)
			socket.on('on-student-joined', setStudent)

			socket.on('on-answer', setAnswerAsRemoteDescription)
			socket.on('on-offer', answerToOffer)
			socket.on('on-ice-candidate-offer', setICECandidateMsg)

			socket.on('on-teacher-leave', handleTeacherDisconnection)
			socket.on('on-student-leave', handleStudentDisconnection)

			socket.on('on-ended-room', () => alert('This room does not exist anymore'))
		})

		return () => {
			userStream.current.getTracks().forEach(track => {
				track.stop();
			});
			/*			peers.current.forEach(({peer}) => {
				peer.close();
			})*/
			socket.disconnect()
		}
	}, [])

	return <LanguageProvider localization={localization}>
		<Head>
			<title>Teacher-time | Room</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div>
			<BoardContainer
				socket={socket}
				roomID={roomID}
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
