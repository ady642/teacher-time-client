import React, {FunctionComponent} from "react";
import { Switch } from "@material-ui/core";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useUserReducers from "@/context/user/helpers/useUserReducers";
export interface AvailableSwitchProps {
	createRoom: () => void;
	deleteRoom: () => void;
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = ({ createRoom, deleteRoom }) => {
	const { available } = useUserGetters()
	const { setTeacherAvailable } = useUserReducers()

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
