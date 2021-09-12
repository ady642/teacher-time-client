import {FunctionComponent} from "react";
import EmailInput, {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";

interface RegisterEmailInputProps extends EmailInputProps {}

const RegisterEmailInput: FunctionComponent<RegisterEmailInputProps> = ({
	value,setValue, className, exception
}) => {
	return <EmailInput
		value={value}
		setValue={setValue}
		className={className}
		exception={exception}
	/>
}

export default RegisterEmailInput
