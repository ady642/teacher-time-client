import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface PasswordInputProps extends Omit<InputProps, 'type'> {}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({value,setValue,label, className}) => {
	return <TTInput className={className} label={label} type={'text'} value={value} setValue={setValue} placeholder={'5 caractères minimum'} />
}

export default PasswordInput
