import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import { TouchEvent } from "react";
import ToolInterface from "../interfaces/Tool";

const useTouchEvents = (
	drawing: boolean,
	setDrawing: (drawing: boolean) => void,
	chalkParams: ChalkParams,
	setChalkParams: (chalkParams: ChalkParams) => void,
	drawLine: (chalkX: number, chalkY: number, pageX: number, pageY: number, chalkColor: string, chalkWidth: number, isEmitting: boolean) => void,
	clearPoints: () => void,
	tool: ToolInterface
) => {

	const onTouchStart = (e: TouchEvent<HTMLCanvasElement>): void => {
		
		if(tool.name == 'TextBox'){return;}
		
		setDrawing(true);
		if(e.touches.length === 0) {
			return
		}
		setChalkParams({
			...chalkParams,
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
		})
	}

	const onTouchMove = (e: TouchEvent<HTMLCanvasElement>): void => {
		if(e.touches.length === 0) {
			return
		}

		if (!drawing || tool.name == 'TextBox') { return; }
		drawLine(chalkParams.x, chalkParams.y, e.touches[0].pageX, e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
		setChalkParams({
			...chalkParams,
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
		})
	}

	const onTouchEnd = (e: TouchEvent<HTMLCanvasElement>): void => {
		if(e.touches.length === 0) {
			return
		}
		setDrawing(false);
		setChalkParams({
			...chalkParams,
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
		})
		clearPoints()
	}

	return {
		onTouchEnd,
		onTouchStart,
		onTouchMove
	}
}

export default useTouchEvents
