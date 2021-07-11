import {ChangeEvent, FunctionComponent} from "react";

export interface InputProps {
    label: string;
    type: string;
    value: string;
    setValue: (value: string) => void;
}

const TTInput: FunctionComponent<InputProps> = ({ label,setValue,value,type }) => {
	return <div className="flex flex-col">
		<label>{label}</label>
		<div>
			<input type={type} name={label} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
		</div>
	</div>
}

export default TTInput
