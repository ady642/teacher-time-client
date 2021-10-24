import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {calculateControlPoints} from "@/modules/Room/Whiteboard/utils/calculs/controlPoints";

export const STEP_POINT = 1

export const bzCurveCustom = (context: CanvasRenderingContext2D, points: Point[], temporaryPoint: Point, setTemporaryPoint: (point: Point) => void) => {
	context.beginPath();

	const A = points[points.length - 3 * STEP_POINT]
	context.moveTo(A.x, A.y)
	const B = points[points.length - 2 * STEP_POINT]
	const C = points[points.length - STEP_POINT]

	const { BLeft, BRight } = calculateControlPoints(A, B, C)

	context.bezierCurveTo(temporaryPoint.x, temporaryPoint.y, BLeft.x, BLeft.y, B.x, B.y);

	setTemporaryPoint(BRight)

	context.stroke();
	context.closePath();
}
