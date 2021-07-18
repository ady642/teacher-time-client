import {ChangeEvent, FunctionComponent} from "react";

export interface InputProps {
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    className?: string;
    autoComplete?: string;
    exception?: string;
}

const TTInput: FunctionComponent<InputProps> = ({
	label,
	setValue, value,
	placeholder = '',
	type ='text',
	className = '',
	autoComplete= '',
	exception= ''
}) => {
	return <div className={`flex relative flex-col w-full ${className}`}>
		<label className={'font-bold'}>{label}</label>
		<div className={`border border-1 rounded-md p-2 border-gray-300 transition focus-within:border-black`}>
			<input
				autoComplete={autoComplete}
				placeholder={placeholder}
				type={type}
				name={label}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
			/>
		</div>
		<span className={`text-red-700 absolute -bottom-5 transition-all text-xs pt-1 ${exception ? 'text-opacity-100': 'text-opacity-0'}`}>{ exception }</span>
	</div>
}

export default TTInput
