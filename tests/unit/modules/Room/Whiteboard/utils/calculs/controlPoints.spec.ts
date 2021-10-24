import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {calculateControlPoints} from "@/modules/Room/Whiteboard/utils/calculs/controlPoints";

describe('controlPoints calculs', () => {
	it('should calculate the control points', () => {
		// Given I have 3 points
		const A: Point = {
			x: 10,
			y: 0,
		}

		const B: Point = {
			x: 20,
			y: 0,
		}

		const C: Point = {
			x: 20,
			y: 10,
		}

		// When I call the calculateControlPoints function
		const {BLeft, BRight} = calculateControlPoints(A, B, C)

		// Then I must have two control points
		expect(BLeft.x).toBe(17.64297739604484)
		expect(BLeft.y).toBe(-2.3570226039551585)
		expect(BRight.x).toBe(22.35702260395516)
		expect(BRight.y).toBe(2.3570226039551585)
	})
})
