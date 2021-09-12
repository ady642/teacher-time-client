import {FunctionComponent} from "react";
import inputStyles from "./styles/checkboxStyles.module.scss";

interface TTCheckboxProps {
    value: boolean;
    setValue?: (value: boolean) => void;
}

const TTCheckbox: FunctionComponent<TTCheckboxProps> = ({ value, setValue }) => {
	return <div className={inputStyles['tt-input--checkbox']}>
		<input type="checkbox" checked={value} onChange={(event) => setValue(event.target.checked)}/>
		<label htmlFor="checkbox"/>
	</div>
}

export default TTCheckbox
