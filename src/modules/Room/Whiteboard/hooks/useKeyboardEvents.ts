import TextBoxParams from "@/modules/Room/Whiteboard/interfaces/TextBoxParams";
import {KeyboardEvent} from "react";

const useKeyboardEvents = (
   
    fillTextBox: (x0: number, y0: number,color: string, size:number,text:string, cpt:boolean) => void,
    textBoxParams: TextBoxParams,
	
	
) => {

	const onKeyDown = (e: KeyboardEvent<HTMLCanvasElement>) => {
	//	fillTextBox(100,100,textBoxParams.color,25/*textBoxParams.size*/,e.key,textBoxParams.cpt)

        
		
	}
    const onKeyUp = (e: KeyboardEvent<HTMLCanvasElement>) => {
		
		
	}

    const onKeyPress = (e: KeyboardEvent<HTMLCanvasElement> ) => {
		
        
	}

	

	return {
		onKeyDown,
        onKeyUp,
        onKeyPress
	}
}

export default useKeyboardEvents