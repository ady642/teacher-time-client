import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface TeachersCreateFormClassInputProps extends Omit<InputProps, 'label'> {

}

const TeachersCreateFormClassInput: FunctionComponent<TeachersCreateFormClassInputProps> = ({ setValue, value, className, type, placeholder }) => {
	return <TTInput
		className={`mb-4 ${className}`}
		setValue={setValue}
		value={value}
		placeholder={placeholder}
		withLabel={false}
		type={type}
	/>
}

export default TeachersCreateFormClassInput
