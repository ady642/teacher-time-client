import {FunctionComponent} from "react";
import PasswordInput, {PasswordInputProps} from "@/modules/Auth/components/Inputs/PasswordInput";

interface RegisterPasswordInputProps extends PasswordInputProps {}

const LoginPasswordInput: FunctionComponent<RegisterPasswordInputProps> = ({exception, value,setValue, className}) => {
	return <PasswordInput
		className={className}
		value={value}
		setValue={setValue}
		exception={exception}
	/>
}

export default LoginPasswordInput
