import {ChangeEvent, FunctionComponent} from "react";
import ErrorMessage from "@/common/components/Errors/ErrorMessage";

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
		<div className={`border border-1 rounded-md p-1 border-gray-300 transition focus-within:border-black`}>
			<input
				className="w-full p-1"
				autoComplete={autoComplete}
				placeholder={placeholder}
				type={type}
				name={label}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
			/>
		</div>
		<ErrorMessage exception={exception} />
	</div>
}

export default TTInput
