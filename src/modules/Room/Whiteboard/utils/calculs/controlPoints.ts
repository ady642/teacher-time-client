import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {
	calculateDistanceBetweenTwoPoints,
	translatePoint,
	vectorType
} from "@/modules/Room/Whiteboard/utils/calculs/generalCalcul";

export const calculateControlPoints = (A: Point, B: Point, C: Point) => {
	const AC = calculateDistanceBetweenTwoPoints(A, C)
	const AB = calculateDistanceBetweenTwoPoints(A, B)
	const BC = calculateDistanceBetweenTwoPoints(B, C)

	const vectorTranslationCA: vectorType = {
		firstPoint: C,
		secondPoint: A
	}

	const BLeft = translatePoint({
		pointToTranslate: B,
		vectorTranslation: vectorTranslationCA,
		dilatationCoefficient: AB / (3*AC)
	})

	const vectorTranslationAC: vectorType = {
		firstPoint: A,
		secondPoint: C
	}

	const BRight = translatePoint({
		pointToTranslate: B,
		vectorTranslation: vectorTranslationAC,
		dilatationCoefficient: BC / (3*AC)
	})

	return {
		BLeft,
		BRight
	}
}
