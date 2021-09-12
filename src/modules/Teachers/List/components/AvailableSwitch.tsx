import React, {FunctionComponent} from "react";
import { Switch } from "@material-ui/core";
import useUserGetters from "@/context/user/helpers/useUserGetters";
import useUserReducers from "@/context/user/helpers/useUserReducers";

interface AvailableSwitchProps {
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = () => {
	const { available } = useUserGetters()
	const { setTeacherAvailable } = useUserReducers()

	return <div className={'flex items-center'} onClick={() => setTeacherAvailable(!available)}>
		<Switch checked={available} onChange={(e) => setTeacherAvailable(e.target.checked)} name="available" />
		<p>{available ? 'Disponible': 'Indisponible'}</p>
	</div>
}

export default AvailableSwitch
