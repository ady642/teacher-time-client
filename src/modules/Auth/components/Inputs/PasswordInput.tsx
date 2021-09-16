import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'placeholder' | 'autoComplete' | 'label'> {}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({exception, value,setValue, className}) => {
	return <TTInput
		autoComplete={'password'}
		className={className}
		label={'Mot de passe'}
		type={'password'}
		value={value}
		setValue={setValue}
		placeholder={'5 caractères minimum'}
		exception={exception}
	/>
}

export default PasswordInput
