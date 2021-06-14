import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class ColorSelector implements ToolInterface {

    color: string;
    width: number;
    name: string;

    constructor({ color = '#000', width= 5, name = 'ColorSelector' } = {}) {
    	this.color = color
    	this.name = name
        this.width = width
    }
}

export default ColorSelector