import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface EmailInputProps extends Omit<InputProps, 'type'> {}

const EmailInput: FunctionComponent<EmailInputProps> = ({value,setValue,label}) => {
	return <TTInput label={label} type={'text'} value={value} setValue={setValue} />
}

export default EmailInput
