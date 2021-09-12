import React, {FunctionComponent, useState} from "react";
import { Switch } from "@material-ui/core";

interface AvailableSwitchProps {
}

const AvailableSwitch: FunctionComponent<AvailableSwitchProps> = () => {
	const [available, setAvailable] = useState(false)

	return <div className={'flex items-center'} onClick={() => setAvailable(!available)}>
		<Switch checked={available} onChange={(e) => setAvailable(e.target.checked)} name="available" />
		<p>{available ? 'Disponible': 'Indisponible'}</p>
	</div>
}

export default AvailableSwitch
