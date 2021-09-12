import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

export interface LastNameInputProps extends Omit<InputProps, 'type' | 'autoComplete' | 'placeholder' | 'label'> {}

const LastNameInput: FunctionComponent<LastNameInputProps> = ({
	value,setValue, className, exception
}) => {
	return <TTInput
		autoComplete={'name'}
		className={className}
		label={'Nom'}
		type={'text'}
		value={value} setValue={setValue}
		placeholder={'Einstein'}
		exception={exception}
	/>
}

export default LastNameInput
