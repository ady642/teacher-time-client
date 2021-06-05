import useAppReducers from "@/context/app/helpers/useAppReducers";
import {useEffect, useState} from "react";
import {socket} from "@/common/utils/client";
import useRoutePush from "@/common/hooks/useRoutePush";

export default (locale: string) => {
	const { setAppLoading } = useAppReducers()
	const [noRoomModalOpened, setNoRoomModalOpened] = useState(false)
	const { goTo } = useRoutePush()

	const callTeacher = async () => {
		await socket.emit('join-intent')
		setAppLoading(true)
	}

	useEffect(() => {
		socket.on('on-no-room', () => {
			setNoRoomModalOpened(true)
			setAppLoading(false)
		})
		socket.on('on-accepted', async ({roomID = '', teacherID = '' }) => {
			await goTo(locale, `room/${roomID}`, { teacherID })
			setAppLoading(false)
		})
		socket.on('on-rejected', () => {
			alert('Les professeur sont tous occupés pour le moment, Veuillez réessayer plus tard')
			setAppLoading(false)
		})
	}, [])

	return {
	    callTeacher,
		setNoRoomModalOpened,
		noRoomModalOpened
	}
}
