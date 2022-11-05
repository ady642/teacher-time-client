import useAppReducers from "@/context/app/helpers/useAppReducers";
import {useEffect, useState} from "react";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";
import useAuthGetters from "@/context/auth/helpers/useAuthGetters";

const useRoom = () => {
	const { setAppLoading } = useAppReducers()
	const { user } = useAuthGetters()
	//const { openSignInModal } = useAuthReducers()
	const [noRoomModalOpened, setNoRoomModalOpened] = useState(false)

	const callTeacher = async (teacherID: string) => {
		/*if(!token) {
			openSignInModal()
			return
		}*/

		await socket.emit('join-intent', { teacherID, studentID: user?._id})
		setAppLoading(true)
	}

	useEffect(() => {
		socket.on('on-accepted', async ({ meetID = ''}) => {
			await window.open(`https://meet.google.com/${meetID}`)
			setAppLoading(false)
			//await goTo(`room/${roomID}`, { teacherID })
		})
		socket.on('on-rejected', () => {
			alert('Le professeur est occupé pour le moment, Veuillez réessayer plus tard :)')
			setAppLoading(false)
		})
	}, [])

	return {
	    callTeacher,
		setNoRoomModalOpened,
		noRoomModalOpened,
	}
}

export default useRoom
