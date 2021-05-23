import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class Pencil implements ToolInterface {
    color: string;
    width: number;
    name: string;

    constructor({ color = '#000', width = 5, name = 'Pencil' } = {}) {
    	this.color = color
    	this.width = width
    	this.name = name
    }
}

export default Pencil
