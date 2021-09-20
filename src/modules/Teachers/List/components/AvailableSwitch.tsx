import React, {FunctionComponent} from "react";
import { Switch } from "@material-ui/core";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useUserReducers from "@/context/user/helpers/useUserReducers";
import useRoomManagement from "@/modules/Room/hooks/useRoomManagement";

export interface AvailableSwitchProps {
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = () => {
	const { available } = useUserGetters()
	const { setTeacherAvailable } = useUserReducers()

	const {
		createRoom, deleteRoom,
	} = useRoomManagement()

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
