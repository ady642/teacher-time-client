import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

interface ConfirmationPasswordInputProps extends Omit<InputProps, 'type'> {}

const ConfirmationPasswordInput: FunctionComponent<ConfirmationPasswordInputProps> = ({value,setValue,label}) => {
	return <TTInput label={label} value={value} type="password" setValue={setValue} placeholder={'Confirmation password'} />
}

export default ConfirmationPasswordInput
