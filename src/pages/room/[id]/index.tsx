import React, {FC, useEffect, useRef, useState} from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import useRoutePush from "@/common/hooks/useRoutePush";
import Head from "next/head";
import useSocketAudio from "@/modules/Room/hooks/useSocketAudio";

interface RoomProps {

}

const Room: FC<RoomProps> = ({ roomID, teacherID }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { goTo } = useRoutePush()
	const [studentName, setStudentName] = useState('')
	const [teacherName, setTeacherName] = useState('')
	const [duration, setDuration] = useState(0)
	//const { user } = useAuthGetters()


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
		await goTo('home')
	}

	const handleStudentDisconnection = async () => {
		alert('The student is gone')
	}

	/*const activateMicrophone = () => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream
		}).catch((e) => alert(e))
	}*/

	useEffect(() => {
		joinRoom()

		socket.on('on-teacher-leave', handleTeacherDisconnection)
		socket.on('on-student-leave', handleStudentDisconnection)

		socket.on('on-ended-room', () => alert('This room does not exist anymore'))

		if(teacherID) {
			//setStudentName(`${user.firstName} ${user.lastName}`)
			setStudentName(`Elève`)
			setTeacherName(`Gaston Nahman HAIK`)
		}

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
				setDuration={setDuration}
				duration={duration}
				teacherName={teacherName}
				studentName={studentName}
			/>
		</div>
	</>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.query?.id ?? ''
	const teacherID = ctx.query?.teacherID ?? ''

	return { props: { roomID: id, teacherID } }
}

export default withRouter(Room)
