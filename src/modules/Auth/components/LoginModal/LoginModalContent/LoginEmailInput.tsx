import {FunctionComponent} from "react";
import EmailInput, {EmailInputProps} from "@/modules/Auth/components/Inputs/EmailInput";

interface LoginEmailInputProps extends EmailInputProps {}

const LoginEmailInput: FunctionComponent<LoginEmailInputProps> = ({
	value,setValue, className, exception
}) => {
	return <EmailInput
		value={value}
		setValue={setValue}
		className={className}
		exception={exception}
	/>
}

export default LoginEmailInput
