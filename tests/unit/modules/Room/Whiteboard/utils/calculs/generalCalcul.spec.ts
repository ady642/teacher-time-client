import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {translatePoint, vectorType} from "@/modules/Room/Whiteboard/utils/calculs/generalCalcul";

describe('general calcul for Points', () => {
	it('translatePoint', () => {
		// Given I have a point
		const A: Point = {
			x: 10, y: 10
		}

		// And a translation vector
		const vector: vectorType = {
			firstPoint: {
				x: 10,
				y: 10,
			}, secondPoint: {
				x: 10,
				y: 5
			}
		}

		// And a dilatation coefficient
		const dilatationCoefficient = 1/3


		// When I call the translatePoint function
		const translatedPoint = translatePoint({
			pointToTranslate: A,
			vectorTranslation: vector,
			dilatationCoefficient
		})


		// Then I must have the translated point with good coordinates
		expect(translatedPoint.x).toBe(10)
		expect(translatedPoint.y).toBe(25/3)
	})
})
