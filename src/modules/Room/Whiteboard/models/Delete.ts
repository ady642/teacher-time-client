import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class Eraser implements ToolInterface {
    name: string;
    width: number;
    color: string;

    constructor({ color = '#FFF', width = 5, name = 'Eraser'} = {}) {
    	this.width = width
    	this.color = color
    	this.name = name
    }
}

export default Eraser
