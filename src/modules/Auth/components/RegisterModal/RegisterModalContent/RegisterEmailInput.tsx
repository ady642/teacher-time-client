import {FunctionComponent} from "react";
import EmailInput, {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";

interface RegisterEmailInputProps extends EmailInputProps {}

const RegisterEmailInput: FunctionComponent<RegisterEmailInputProps> = ({
	value,setValue,label, className, exception
}) => {
	return <EmailInput
		label={label}
		value={value}
		setValue={setValue}
		className={className}
		exception={exception}
	/>
}

export default RegisterEmailInput
