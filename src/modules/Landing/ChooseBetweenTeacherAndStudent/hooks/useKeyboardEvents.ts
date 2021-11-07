import {MutableRefObject, KeyboardEvent, useState} from "react";
import * as THREE from "three";

type useKeyboardEvents = {
	keysPressed:  MutableRefObject<Record<string, boolean>>;
	model: MutableRefObject<THREE.Scene>;
	camera: MutableRefObject<THREE.Camera>;
	walkDirection: MutableRefObject<THREE.Vector3>;
	rotateAngle: MutableRefObject<THREE.Vector3>;
	rotateQuarternion: MutableRefObject<THREE.Quaternion>;
	mixer: MutableRefObject<THREE.AnimationMixer>
}

export default ({
	keysPressed,
	model,
	camera,
	walkDirection,
	rotateAngle,
	rotateQuarternion,
	mixer
}: useKeyboardEvents) => {
	const UP = 'ArrowUp'
	const LEFT = 'ArrowLeft'
	const DOWN = 'ArrowDown'
	const RIGHT = 'ArrowRight'
	const SHIFT = 'shift'
	const DIRECTIONS = [UP, LEFT, DOWN, RIGHT]

	const [currentAction, setCurrentAction] = useState('Walking')

	// constants
	const runVelocity = 5
	const walkVelocity = 2

	const chooseDirection = (keyboardEvent: KeyboardEvent<HTMLDivElement>, isActive = true) => {
		switch (keyboardEvent.key) {
		case "ArrowUp":
			keysPressed.current['ArrowUp'] = isActive
			return
		case "ArrowRight":
			keysPressed.current['ArrowRight'] = isActive
			return
		case "ArrowLeft":
			keysPressed.current['ArrowLeft'] = isActive
			return;
		case "ArrowDown":
			keysPressed.current['ArrowDown'] = isActive
			return;
		}
	}

	const move = (delta: number) => {
		// rotate model
		const direction = directionOffset()

		if(direction === null) {
			return
		}

		rotateQuarternion.current.setFromAxisAngle(rotateAngle.current, direction)
		model.current.quaternion.rotateTowards(rotateQuarternion.current, 0.2)

		// calculate direction
		camera.current.getWorldDirection(walkDirection.current)
		walkDirection.current.y = 0
		walkDirection.current.normalize()

		walkDirection.current.applyAxisAngle(rotateAngle.current, direction)

		if(mixer.current)
			mixer.current.update(delta)

		// run/walk velocity
		const velocity = currentAction == 'Running' ? runVelocity : walkVelocity

		// move model & camera
		const moveX = walkDirection.current.x * velocity * delta
		const moveZ = walkDirection.current.z * velocity * delta

		model.current.position.x += moveX
		model.current.position.z += moveZ
	}

	const directionOffset = () => {
		let directionOffset = null // w

		if (keysPressed.current[UP]) {
			if (keysPressed.current[LEFT]) {
				directionOffset = Math.PI / 4
			} else if (keysPressed.current[RIGHT]) {
				directionOffset = - Math.PI / 4
			} else {
				directionOffset = 0
			}
		} else if (keysPressed.current[DOWN]) {
			if (keysPressed.current[LEFT]) {
				directionOffset = Math.PI / 4 + Math.PI / 2
			} else if (keysPressed.current[RIGHT]) {
				directionOffset = -Math.PI / 4 - Math.PI / 2
			} else {
				directionOffset = Math.PI
			}
		} else if (keysPressed.current[LEFT]) {
			directionOffset = Math.PI / 2
		} else if (keysPressed.current[RIGHT]) {
			directionOffset = - Math.PI / 2
		}

		return directionOffset
	}

	return {
		chooseDirection,
		move
	}
}
