import React, { FC, useEffect, useRef } from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import useRoutePush from "@/common/hooks/useRoutePush";
import Head from "next/head";
import useRoomPermission from "@/modules/Room/hooks/useRoomPermission";
import useSocketAudio from "@/modules/Room/hooks/useSocketAudio";

interface RoomProps {

}

const Room: FC<RoomProps> = ({ roomID }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	/*	const [muted, setMuted] = useState(false)

	const toggleMute = () => {
		setMuted(!muted)
		userStream.current.getAudioTracks()[0].enabled = !userStream.current.getAudioTracks()[0].enabled
	}*/

	// WebRTC
	const userStream = useRef<MediaStream>()
	const { joinRoom, partnerAudio } = useSocketAudio(roomID)

	const handleTeacherDisconnection = async () => {
		alert('The teacher is gone')
		await goTo('')
	}

	const handleStudentDisconnection = async () => {
		alert('The student is gone')
	}

	const activateMicrophone = () => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream
		}).catch((e) => alert(e))
	}

	useRoomPermission(activateMicrophone)

	useEffect(() => {
		joinRoom()

		socket.on('on-teacher-leave', handleTeacherDisconnection)
		socket.on('on-student-leave', handleStudentDisconnection)

		socket.on('on-ended-room', () => alert('This room does not exist anymore'))

		return () => {
			userStream.current.getTracks().forEach(track => {
				track.stop();
			});

			socket.disconnect()
		}
	}, [])

	return <>
		<Head>
			<title>Teacher-time | Room</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div>
			<audio ref={partnerAudio} />
			<BoardContainer
				socket={socket}
				roomID={roomID}
			/>
		</div>
	</>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.query?.id ?? ''

	return { props: { roomID: id } }
}

export default withRouter(Room)
