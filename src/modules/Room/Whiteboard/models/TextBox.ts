import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class TextBox implements ToolInterface {
    name: string;
    width: number;
    color: string;
    text: string;

    constructor({ color = '#000', width = 2, name = 'TextBox'/*, text=""*/} = {}) {
    	this.width = width
    	this.color = color
    	this.name = name
    	/* this.text = text*/
    }
}

export default TextBox
