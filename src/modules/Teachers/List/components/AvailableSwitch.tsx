import React, {FunctionComponent} from "react";
import { Switch } from "@material-ui/core";
import useSwitchAvailable from "@/modules/Teachers/List/hooks/useSwitchAvailable";

export interface AvailableSwitchProps {
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = () => {
	const { available, toggleAvailability } = useSwitchAvailable()

	return <div className={'flex items-center cursor-pointer'} onClick={() => toggleAvailability()}>
		<Switch checked={available} name="available" />
		<p>{available ? 'Disponible': 'Indisponible'}</p>
	</div>
}

export default AvailableSwitch
