import React, {
	MutableRefObject,
	FC,

} from "react";
import TextareaAutosize from 'react-textarea-autosize';
interface InputTextProps {

	textBoxRef: MutableRefObject<HTMLTextAreaElement>

}

const InputText:FC<InputTextProps> = (props) => {
	return <TextareaAutosize autoFocus id="InputText" ref={props.textBoxRef} className="  w-40 box-content font-sans:Arial absolute select-all resize flex-grow border border-solid bg-transparent rounded-md tracking-normal leading-normal text-left text-opacity-25 text-lg  align-middle flex-auto  cursor-auto" />
};

export default InputText;

