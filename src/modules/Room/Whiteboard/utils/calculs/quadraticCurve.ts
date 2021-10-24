import Point from "@/modules/Room/Whiteboard/interfaces/Point";

export function quadraticCurve(context: CanvasRenderingContext2D, points: Point[],) {
	let i = 1
	// draw a basic circle instead
	if (points.length < 6) {
		let b = points[0];
		context.beginPath(), context.arc(b.x, b.y, context.lineWidth / 2, 0, Math.PI * 2, !0), context.closePath(), context.fill();
		return
	}
	context.beginPath(), context.moveTo(points[0].x, points[0].y);
	// draw a bunch of quadratics, using the average of two points as the control point
	for (i = 1; i < points.length - 2; i++) {
		let c = (points[i].x + points[i + 1].x) / 2,
			d = (points[i].y + points[i + 1].y) / 2;
		context.quadraticCurveTo(points[i].x, points[i].y, c, d)
	}
	context.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
	context.stroke()
	context.closePath();
}
