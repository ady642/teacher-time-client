import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface TeachersCreateFormClassInputProps extends Omit<InputProps, 'label'> {

}

const TeachersCreateFormClassInput: FunctionComponent<TeachersCreateFormClassInputProps> = ({ setValue, exception, value, className, type, placeholder }) => {
	return <TTInput
		className={`mb-6 ${className}`}
		setValue={setValue}
		value={value}
		placeholder={placeholder}
		withLabel={false}
		type={type}
		exception={exception}
	/>
}

export default TeachersCreateFormClassInput
