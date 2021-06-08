import React, {
	MutableRefObject,
	FC,
	
} from "react";

interface InputTextProps {
	
	textBoxRef: MutableRefObject<HTMLTextAreaElement>
	
}

const InputText:FC<InputTextProps> = (props) => {
	
	


	return (
		
		
		

				<textarea id="InputText" ref={props.textBoxRef } className="  font-sans:Arial absolute select-all resize flex-grow border border-solid bg-transparent rounded-md tracking-normal leading-normal text-left text-opacity-25 text-lg  align-middle flex-auto  cursor-auto" ></textarea>
				
		
			
		
	);
};

export default InputText;

