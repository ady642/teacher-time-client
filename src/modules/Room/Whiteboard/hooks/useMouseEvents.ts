import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import {MouseEvent} from "react";

const useMouseEvents = (
	drawing: boolean,
	setDrawing: (drawing: boolean) => void,
	chalkParams: ChalkParams,
	setChalkParams: (chalkParams: ChalkParams) => void,
	drawLine: (chalkX: number, chalkY: number, pageX: number, pageY: number, chalkColor: string, chalkWidth: number, isEmitting: boolean) => void,
	clearPoints: () => void,
	setRightClickActivated: (rightClickActivated: boolean) => void,
	rightClickActivated: boolean
) => {

	const onMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
		console.log(e)

		if(e.button !== 0) {
			return
		}

		setRightClickActivated(false)
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

	const onMouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
		if(e.button !== 0) {
			return
		}

		setChalkParams({
			...chalkParams,
			x: e.pageX,
			y: e.pageY,
		})
		if(!rightClickActivated) {
			drawLine(chalkParams.x, chalkParams.y, e.pageX, e.pageY, chalkParams.color, chalkParams.width, true);
		}
		setDrawing(false);
		clearPoints()
	}

	const onMouseOut = () => {
		setDrawing(false);
		clearPoints()
	}

	const onRightClick = () => {
		setRightClickActivated(true)
	}

	return {
		onMouseUp,
		onMouseDown,
		onMouseMove,
		onMouseOut,
		onRightClick
	}
}

export default useMouseEvents
