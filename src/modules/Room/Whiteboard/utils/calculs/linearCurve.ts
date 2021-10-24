import Point from "@/modules/Room/Whiteboard/interfaces/Point";

export const linearCurve = (context: CanvasRenderingContext2D, A: Point, B: Point) => {
	context.beginPath()
	context.moveTo(A.x, A.y)
	context.lineTo(B.x, B.y)
	context.stroke()
	context.closePath();
}
