import Point from "@/modules/Room/Whiteboard/interfaces/Point";
import {gradient} from "@/modules/Room/Whiteboard/utils";

const rootsOfQuadractic = (a: number, b: number, c: number) => {
	// program to solve quadratic equation
	let root1, root2;

	// calculate discriminant
	let discriminant = b * b - 4 * a * c;

	// condition for real and different roots
	if (discriminant > 0) {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	}

	// condition for real and equal roots
	else if (discriminant === 0) {
		root1 = root2 = -b / (2 * a);
	}

	return Math.max(root1, root2)
}

const relocateE = (C: Point, D: Point, E:Point): Point => {
	const CDGradient: number = gradient(C, D)
	const DE: number = Math.sqrt((1 + CDGradient^2))

	const newCoordinates: number = DE / Math.sqrt(1+ CDGradient^2)



	return {
		x: D.x + newCoordinates,
		y: D.y + CDGradient * newCoordinates,
	}
}

it('Find the E Point', () => {
	// Given I Have C, D and E points
	const C: Point = {
		x: 10,
		y: 10,
	}

	const D: Point = {
		x: 20,
		y: 0,
	}

	const E: Point = {
		x: 30,
		y: 5,
	}

	// When I call the FindE function
	const newE = relocateE(C, D, E)

	//Then I must have the new Coords
	expect(newE.y).toBe(-10)
	expect(newE.x).toBe(30)
})
