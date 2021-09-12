import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

export interface EmailInputProps extends Omit<InputProps, 'type' | 'autoComplete' | 'placeholder' | 'label'> {}

const EmailInput: FunctionComponent<EmailInputProps> = ({
	value,setValue, className, exception
}) => {
	return <TTInput
		autoComplete={'email'}
		className={className}
		label={'E-mail'}
		type={'text'}
		value={value} setValue={setValue}
		placeholder={'name@email.com'}
		exception={exception}
	/>
}

export default EmailInput
