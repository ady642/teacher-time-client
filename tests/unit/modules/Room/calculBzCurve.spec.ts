import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import { relocateE } from "@/modules/Room/Whiteboard/utils";

it('Find the E Point', () => {
	// Given I Have C, D and E points
	const C: Point = {
		x: 10,
		y: 0,
	}

	const D: Point = {
		x: 20,
		y: 0,
	}

	const E: Point = {
		x: 20,
		y: 10,
	}

	// When I call the FindE function
	const newE = relocateE(C, D, E)

	//Then I must have the new Coords
	expect(newE.x).toBe(30)
	expect(newE.y).toBe(0)
})
