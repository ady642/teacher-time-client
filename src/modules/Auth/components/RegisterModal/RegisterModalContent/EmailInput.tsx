import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface EmailInputProps extends Omit<InputProps, 'type'> {}

const EmailInput: FunctionComponent<EmailInputProps> = ({value,setValue,label, className}) => {
	return <TTInput className={className} label={label} type={'text'} value={value} setValue={setValue} placeholder={'name@email.com'} />
}

export default EmailInput
