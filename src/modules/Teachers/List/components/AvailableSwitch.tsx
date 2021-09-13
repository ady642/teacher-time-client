import React, {FunctionComponent, useEffect, useState} from "react";
import { Switch } from "@material-ui/core";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import {v4} from "uuid";
import {socket} from "@/common/utils/client";
import useAppReducers from "@/context/app/helpers/useAppReducers";

interface AvailableSwitchProps {
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = () => {
	const { available } = useUserGetters()
	const { setTeacherAvailable } = useUserReducers()
	const { setAppLoading } = useAppReducers()
	const [roomId, setRoomId] = useState<string>(null)

	const createRoom = () => {
		const roomID = v4()
		setRoomId(roomID)
		socket.emit('create-room', roomID)
		setAppLoading(true)
	}

	const deleteRoom = () => {
		socket.emit('delete-room', roomId)
		setAppLoading(true)
	}

	const set = () => {
		if(available) {
			deleteRoom()
		} else {
			createRoom()
		}

		setTeacherAvailable(!available)
	}

	return <div className={'flex items-center cursor-pointer'} onClick={() => set()}>
		<Switch checked={available} name="available" />
		<p>{available ? 'Disponible': 'Indisponible'}</p>
	</div>
}

export default AvailableSwitch
