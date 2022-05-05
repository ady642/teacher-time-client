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
	const [studentSocketID, setSocketStudentID] = useState('')
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
		const teacherInfo: Teacher = new Teacher(teacher)
		socket.emit('create-room', {roomID: uuid, teacher: teacherInfo })
	}

	const deleteRoom = () => {
		socket.emit('delete-room', roomID)
	}

	const joinIntent = async ({ studentSocketID, studentID }: { studentSocketID: string, studentID: string }) => {
		setStudentID(studentID)
		setSocketStudentID(studentSocketID)
		setDisplayAcceptModal(true)
		await beep()
	}

	const closeModalAcceptation = async () => {
		setDisplayAcceptModal(false)
	}

	const acceptStudent = async () => {
		await llamadaRef.current.pause()
		socket.emit('accept-student', { studentSocketID, studentID, roomID })
		await goTo(`room/${roomID}`)
	}

	const rejectStudent = async () => {
		await llamadaRef.current.pause()
		socket.emit('reject-student', studentSocketID)
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
