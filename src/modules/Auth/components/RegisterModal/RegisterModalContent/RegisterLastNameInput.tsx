import {FunctionComponent} from "react";
import LastNameInput, {LastNameInputProps} from "@/modules/Auth/components/Inputs/LastNameInput";

interface RegisterLastNameInputProps extends LastNameInputProps {}

const RegisterLastNameInput: FunctionComponent<RegisterLastNameInputProps> = ({
	value,setValue, className, exception
}) => {
	return <LastNameInput
		value={value}
		setValue={setValue}
		className={className}
		exception={exception}
	/>
}

export default RegisterLastNameInput
