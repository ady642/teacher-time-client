import ChalkParams from "@/modules/Room/Whiteboard/interfaces/ChalkParams";
import { TouchEvent } from "react";

const useTouchEvents = (
	drawing: boolean,
	setDrawing: (drawing: boolean) => void,
	chalkParams: ChalkParams,
	setChalkParams: (chalkParams: ChalkParams) => void,
	drawLine: (chalkX: number, chalkY: number, pageX: number, pageY: number, chalkColor: string, chalkWidth: number, isEmitting: boolean) => void
) => {

	const onTouchStart = (e: TouchEvent<HTMLCanvasElement>): void => {
		setDrawing(false);
		drawLine(chalkParams.x, chalkParams.y, e.touches[0].pageX, e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
	}

	const onTouchEnd = (e: TouchEvent<HTMLCanvasElement>): void => {
		setDrawing(true);
		setChalkParams({
			...chalkParams,
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
		})
	}

	const onTouchMove = (e: TouchEvent<HTMLCanvasElement>): void => {
		if (!drawing) { return; }
		drawLine(chalkParams.x, chalkParams.y, e.touches[0].pageX, e.touches[0].pageY, chalkParams.color, chalkParams.width, true);
		setChalkParams({
			...chalkParams,
			x: e.touches[0].pageX,
			y: e.touches[0].pageY,
		})
	}

	return {
		onTouchEnd,
		onTouchStart,
		onTouchMove
	}
}

export default useTouchEvents
