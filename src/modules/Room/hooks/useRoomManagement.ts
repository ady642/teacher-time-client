import {useEffect, useRef, useState} from "react";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useTeacherClient from "@/modules/Teachers/services/useTeacherClient";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";
import {v4} from "uuid";
import Teacher from "@/modules/Teachers/List/models/Teacher";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";
import useRoomGetters from "@/context/room/helpers/useRoomGetters";
import useRoomReducers from "@/context/room/helpers/useRoomReducers";

const useRoomManagement = () => {
	const [studentID, setStudentID] = useState('')
	const llamadaRef = useRef<HTMLAudioElement>(null)
	const [displayAcceptModal, setDisplayAcceptModal] = useState(false)
	const { goTo } = useRoutePush()

	const { roomID } = useRoomGetters()
	const { setRoomID } = useRoomReducers()
	const { teacher } = useUserGetters()
	const { getTeacher } = useTeacherClient()
	const { token, user} = useAuthGetters()

	const beep = async () => {
		if(!llamadaRef.current)
			return

		llamadaRef.current.src = '/sound/tonoDeLlamada.mp3';
		await llamadaRef.current.play()
	}

	const createRoom = () => {
		const uuid = v4()
		setRoomID(uuid)
		const teacherInfo: Teacher = Teacher.fromUserAndTeacher(user, teacher)
		socket.emit('create-room', {roomID: uuid, teacher: teacherInfo })
	}

	const deleteRoom = () => {
		socket.emit('delete-room', roomID)
	}

	const joinIntent = async (id: string) => {
		setStudentID(id)
		setDisplayAcceptModal(true)
		await beep()
	}

	const closeModalAcceptation = async () => {
		setDisplayAcceptModal(false)
	}

	const acceptStudent = async () => {
		await llamadaRef.current.pause()
		await goTo('fr', `room/${roomID}`)
		socket.emit('accept-student', { studentID, roomID: roomID })
	}

	const rejectStudent = async () => {
		await llamadaRef.current.pause()
		socket.emit('reject-student', studentID)
		setStudentID('')
		setDisplayAcceptModal(false)
	}

	useEffect(() => {
		socket.on('on-join-intent', joinIntent)
		socket.on('on-student-already-accepted', closeModalAcceptation)
	}, [])

	useEffect(() => {
		const asyncGetTeacher = async () => {
			await getTeacher()
		}

		if(!teacher && token && user._id) {
			asyncGetTeacher()
		}
	}, [token, user?._id])

	return {
		createRoom,
		deleteRoom,
		acceptStudent,
		rejectStudent,
		displayAcceptModal,
		closeModalAcceptation,
		llamadaRef
	}
}

export default useRoomManagement
