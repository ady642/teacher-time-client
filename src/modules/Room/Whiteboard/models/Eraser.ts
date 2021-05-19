import ToolInterface from "@/modules/Room/Whiteboard/interfaces/Tool";

class Eraser implements ToolInterface {
    width: number
    color: string

    constructor({ color = '#FFF', width = 5 } = {}) {
    	this.width = width
    	this.color = color
    }
}

export default Eraser
