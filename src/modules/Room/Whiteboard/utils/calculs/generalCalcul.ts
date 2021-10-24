import Point from "@/modules/Room/Whiteboard/interfaces/Point";

export const MAX_GRAD = 10000

export const calculateDistanceBetweenTwoPoints = (A: Point, B: Point): number => {
	return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow((A.y - B.y), 2))
}

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

type translatePointPayload = {
	pointToTranslate: Point;
	vectorTranslation: vectorType;
	dilatationCoefficient?: number
}

export type vectorType = { firstPoint:Point, secondPoint: Point }

export const translatePoint = ({
	pointToTranslate,
	vectorTranslation,
	dilatationCoefficient = 1/3
}: translatePointPayload): Point => {
	return {
		x: pointToTranslate.x + dilatationCoefficient * (vectorTranslation.secondPoint.x - vectorTranslation.firstPoint.x),
		y: pointToTranslate.y + dilatationCoefficient * (vectorTranslation.secondPoint.y - vectorTranslation.firstPoint.y),
	}
}
