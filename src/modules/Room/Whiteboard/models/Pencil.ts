import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class Pencil implements ToolInterface {
    color: string
    width: number

    constructor({ color = '#000', width = 5 } = {}) {
    	this.color = color
    	this.width = width
    }
}

export default Pencil
