import {ChangeEvent, FunctionComponent} from "react";

export interface InputProps {
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    className?: string
}

const TTInput: FunctionComponent<InputProps> = ({
	label,
	setValue, value,
	placeholder = '',
	type ='text',
	className = ''
}) => {
	return <div className={`flex flex-col w-full ${className}`}>
		<label className={'font-bold'}>{label}</label>
		<div className={`border border-1 rounded-md p-2 border-gray-300 focus-within:border-black`}>
			<input
				placeholder={placeholder}
				type={type}
				name={label}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
			/>
		</div>
	</div>
}

export default TTInput
