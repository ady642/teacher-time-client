import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import { MouseEvent } from "react";

const useMouseEvents = (
	drawing: boolean,
	setDrawing: (drawing: boolean) => void,
	chalkParams: ChalkParams,
	setChalkParams: (chalkParams: ChalkParams) => void,
	drawLine: (chalkX: number, chalkY: number, pageX: number, pageY: number, chalkColor: string, chalkWidth: number, isEmitting: boolean) => void
) => {

	const onMouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
		setDrawing(false);
		drawLine(chalkParams.x, chalkParams.y, e.pageX, e.pageY, chalkParams.color, chalkParams.width, true);
	}

	const onMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
		setDrawing(true);
		setChalkParams({
			...chalkParams,
			x: e.pageX,
			y: e.pageY,
		})
	}

	const onMouseMove = (e: MouseEvent<HTMLCanvasElement>): void => {
		if (!drawing) { return; }
		drawLine(chalkParams.x, chalkParams.y, e.pageX, e.pageY, chalkParams.color, chalkParams.width, true);
		setChalkParams({
			...chalkParams,
			x: e.pageX,
			y: e.pageY,
		})
	}

	return {
		onMouseUp,
		onMouseDown,
		onMouseMove
	}
}

export default useMouseEvents
