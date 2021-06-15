import React, {FC, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {socket} from "@/common/utils/client";
import {withRouter} from 'next/router'
import BoardContainer from "@/modules/Room/Whiteboard/BoardContainer";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import ModalAcceptation from "@/modules/Room/components/ModalAcceptation";
import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import useRoutePush from "@/common/hooks/useRoutePush";
import useWebRTC from "@/modules/Room/hooks/useWebRTC";
import Head from "next/head";

interface RoomProps {
}

const Room: FC<RoomProps> = ({ roomID, localization }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)
	const [studentID, setStudentID] = useState('')
	const { goTo } = useRoutePush()
	const llamadaRef = useRef<HTMLAudioElement>(null)
	const [muted, setMuted] = useState(false)
	const [socketIDs, setSocketIDs] = useState<string[]>([])

	const toggleMute = () => {
		setMuted(!muted)
		userStream.current.getAudioTracks()[0].enabled = !userStream.current.getAudioTracks()[0].enabled
	}

	// WebRTC
	const peers = useRef<{ [id: string]: RTCPeerConnection }>({})
	const partnersVideos = useRef<HTMLAudioElement[]>([])
	const userStream = useRef<MediaStream>()

	useEffect(() => {
		console.log(Object.keys(peers.current))
		setSocketIDs(Object.keys(peers.current))
	}, [peers.current])

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

	const beep = async () => {
		if(!llamadaRef.current)
			return

		llamadaRef.current.src = '/sound/tonoDeLlamada.mp3';
		await llamadaRef.current.play()
	}

	const joinIntent = async (id: string) => {
		setStudentID(id)
		setDisplayAcceptModal(true)
		await beep()
	}

	const closeModalAcceptation = async () => {
		setDisplayAcceptModal(false)
		await llamadaRef.current.pause()
	}

	const acceptStudent = async () => {
		socket.emit('accept-student', { studentID, roomID })
	}

	const rejectStudent = async () => {
		socket.emit('reject-student', studentID)
		setStudentID('')
		setDisplayAcceptModal(false)
		await llamadaRef.current.pause()
	}

	const setStudent = async (newStudent: string) => {
		await llamadaRef.current.pause()
		await sendOffer(newStudent)
		setDisplayAcceptModal(false)
	}

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
			userStream.current = stream

			socket.emit('join-room', roomID)

			socket.on('on-join-intent', joinIntent)
			socket.on('on-student-already-accepted', closeModalAcceptation)
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
			{ socketIDs.length > 0 && <span className={'text-black flex flex-col'}>
				{ socketIDs.map((id: string) => <span key={id}>{ id }</span>) }
				<button className={'w-fit-content text-white rounded bg-green-500'} onClick={toggleMute}>{ muted ? 'unmute': 'mute' }</button>
			</span> }
			<BoardContainer
				socket={socket}
				roomID={roomID}
			/>
			<ModalAcceptation
				displayAcceptModal={displayAcceptModal}
				handleClose={() => setDisplayAcceptModal(false)}
				acceptStudent={acceptStudent}
				rejectStudent={rejectStudent}
			/>
			<audio loop ref={llamadaRef} />
		</div>
	</LanguageProvider>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.query?.id ?? ''
	const localization = getLocalizationProps(ctx, "room");

	return { props: { roomID: id, localization } }
}

export default withRouter(Room)
