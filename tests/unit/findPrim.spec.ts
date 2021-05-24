import { findPrim } from "../../src/modules/Room/Whiteboard/utils";
import Point from "../../src/modules/Room/Whiteboard/interfaces/Point";

describe('findPrim', () => {
	it('should return good Prim', function () {
		const A: Point = { x: 100, y: 100 }
		const B: Point = { x: 150, y: 150 }
		const C: Point = { x: 340, y: 180 }

		const prim = findPrim(A, B, C.y)

		expect(prim).toEqual({ x: 180, y: 180 })
	});
})
