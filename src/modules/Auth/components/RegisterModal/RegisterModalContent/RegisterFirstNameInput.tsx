import {FunctionComponent} from "react";
import FirstNameInput, {FirstNameInputProps} from "@/modules/Auth/components/Inputs/FirstNameInput";

interface RegisterFirstNameInputProps extends FirstNameInputProps {}

const RegisterFirstNameInput: FunctionComponent<RegisterFirstNameInputProps> = ({
	value,setValue, className, exception
}) => {
	return <FirstNameInput
		value={value}
		setValue={setValue}
		className={className}
		exception={exception}
	/>
}

export default RegisterFirstNameInput
