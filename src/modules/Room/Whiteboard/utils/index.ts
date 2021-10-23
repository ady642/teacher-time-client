import Point from "@/modules/Room/Whiteboard/interfaces/Point";

const MAX_GRAD = 1000

export function gradient(A: Point, B: Point) {
	const gradient = (B.y-A.y)/(B.x-A.x)

	if (gradient < -MAX_GRAD) {
		return -MAX_GRAD
	}

	if(gradient > MAX_GRAD) {
		return MAX_GRAD
	}

	return gradient
}

export const findPrim = (A: Point, B: Point, Cy: number): Point => {
	const primX = B.x + ((Cy - B.y) / gradient(A, B))

	return {
		x: primX,
		y: Cy
	}
}

export const linearCurve = (context: CanvasRenderingContext2D, A: Point, B: Point) => {
	context.beginPath()
	context.moveTo(A.x, A.y)
	context.lineTo(B.x, B.y)
	context.stroke()
	context.closePath();
}

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

export function bzCurve(points: Point[], f: number, t: number, context: CanvasRenderingContext2D) {
	//f = 0, will be straight line
	//t suppose to be 1, but changing the value can control the smoothness too
	if (typeof(f) == 'undefined') f = 0.3;
	if (typeof(t) == 'undefined') t = 0.6;

	context.beginPath();

	let m = 0;
	let dx1 = 0;
	let dy1 = 0;
	let dx2 = 0;
	let dy2 = 0;

	let preP = points[0];
	for (let i = 1; i < points.length; i++) {
		let curP = points[i];
		let nexP = points[i + 1];
		if (nexP) {
			m = gradient(preP, nexP);
			dx2 = (nexP.x - curP.x) * -f;
			dy2 = dx2 * m * t;
		} else {
			dx2 = 0;
			dy2 = 0;
		}

		context.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);
		dx1 = dx2;
		dy1 = dy2;
		preP = curP;
	}
	context.stroke();
	context.closePath();
}

// limit the number of events per second
export function throttle(callback: any, delay: number) {
	let previousCall = new Date().getTime();
	return function() {
		let time = new Date().getTime();

		if ((time - previousCall) >= delay) {
			previousCall = time;
			callback.apply(null, arguments);
		}
	};
}

export const relocateE = (C: Point, D: Point, E:Point): Point => {
	const CDGradient: number = gradient(C, D)
	const DE: number = Math.sqrt(Math.pow(D.x - E.x, 2) + Math.pow((E.y - D.y), 2))

	const coeffTransformation: number = DE / Math.sqrt((1 + Math.pow(CDGradient, 2)))

	return {
		x: D.x + coeffTransformation,
		y: D.y + CDGradient * coeffTransformation,
	}
}


export const bzCurveCustom = (context: CanvasRenderingContext2D, points: Point[],) => {
	context.beginPath();
	let i = 0

	console.log(points)
	for (i; i < points.length - 9; i+=6) {
		context.moveTo(points[i].x, points[i].y)
		const B = points[i + 2]
		const C = points[i + 4]
		const D = points[i + 6]
		const E = points[i + 8]
		points[i + 8] = relocateE(C, D, E)

		context.bezierCurveTo(B.x, B.y, C.x, C.y, D.x, D.y);
	}

	context.stroke();
	context.closePath();
}
