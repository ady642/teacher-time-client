import {ChangeEvent, FunctionComponent} from "react";
import ErrorMessage from "@/common/components/Errors/ErrorMessage";
import inputStyles from '@/common/components/Inputs/styles/inputStyles.module.scss'

export interface InputProps {
    label?: string;
    type?: string;
    value: string | number;
    placeholder?: string;
    setValue: (value: string | number) => void;
    className?: string;
    autoComplete?: string;
    withLabel?: boolean;
    exception?: string;
	appendIcon?: JSX.Element;
}

const TTInput: FunctionComponent<InputProps> = ({
	label,
	setValue, value,
	placeholder = '',
	type ='text',
	className = '',
	autoComplete= '',
	exception= '',
	withLabel= true,
	appendIcon = false,
}) => {
	return <div className={`flex relative flex-col w-full ${className}`}>
		{ withLabel && <label className={'font-bold'}>{label}</label> }
		<div className={inputStyles['TTInput__input-container']}>
			<input
				className="w-full bg-transparent"
				autoComplete={autoComplete}
				placeholder={placeholder}
				type={type}
				name={label}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
			/>
			{ appendIcon }
		</div>
		<ErrorMessage exception={exception} />
	</div>
}

export default TTInput
