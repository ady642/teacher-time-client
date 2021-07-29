import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'placeholder' | 'autoComplete'> {}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({exception, value,setValue,label, className}) => {
	return <TTInput
		autoComplete={'new-password'}
		className={className}
		label={label}
		type={'password'}
		value={value}
		setValue={setValue}
		placeholder={'5 caractères minimum'}
		exception={exception}
	/>
}

export default PasswordInput
