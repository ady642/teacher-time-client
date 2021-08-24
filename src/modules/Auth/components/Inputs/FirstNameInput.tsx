import {FunctionComponent} from "react";
import TTInput, {InputProps} from "@/common/components/Inputs/TTInput";

export interface FirstNameInputProps extends Omit<InputProps, 'type' | 'autoComplete' | 'placeholder' | 'label'> {}

const FirstNameInput: FunctionComponent<FirstNameInputProps> = ({
																  value,setValue, className, exception
															  }) => {
	return <TTInput
		autoComplete={'name'}
		className={className}
		label={'Prénom'}
		type={'text'}
		value={value} setValue={setValue}
		placeholder={'Albert'}
		exception={exception}
	/>
}

export default FirstNameInput
