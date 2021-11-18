import {MutableRefObject, KeyboardEvent, useRef} from "react";
import * as THREE from "three";

type useKeyboardEvents = {
	keysPressed:  MutableRefObject<Record<string, boolean>>;
	model: MutableRefObject<THREE.Scene>;
	camera: MutableRefObject<THREE.Camera>;
	walkDirection: MutableRefObject<THREE.Vector3>;
	rotateAngle: MutableRefObject<THREE.Vector3>;
	rotateQuarternion: MutableRefObject<THREE.Quaternion>;
	animationsMap: MutableRefObject<Map<string, THREE.AnimationAction>>
}

export default ({
	keysPressed,
	model,
	camera,
	walkDirection,
	rotateAngle,
	rotateQuarternion,
	animationsMap
}: useKeyboardEvents) => {
	const UP = 'ArrowUp'
	const LEFT = 'ArrowLeft'
	const DOWN = 'ArrowDown'
	const RIGHT = 'ArrowRight'
	const SHIFT = 'shift'

	const currentAction = useRef('Idle')

	// constants
	const runVelocity = 5
	const walkVelocity = 2
	const FADE_DURATION = 0.5

	const chooseAction = () => {
		let play = '';

		if (isMoving()) {
			play = 'Walking'
		} else {
			play = 'Idle'
		}

		if (currentAction.current !== play) {

			const current = animationsMap.current.get(currentAction.current)

			current.fadeOut(FADE_DURATION)

			const toPlay = animationsMap.current.get(play)

			toPlay
				.reset()
				.fadeIn( FADE_DURATION )
				.play();

			currentAction.current = play
		}
	}

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

	const isMoving = () => {
		return Object.values(keysPressed.current).some((keyPressed: boolean) => keyPressed)
	}

	const move = (delta: number) => {
		chooseAction()

		// rotate model
		if (currentAction.current === 'Running' || currentAction.current === 'Walking') {

			const direction = directionOffset()

			if (direction === null) {
				return
			}

			rotateQuarternion.current.setFromAxisAngle(rotateAngle.current, direction)
			model.current.quaternion.rotateTowards(rotateQuarternion.current, 0.1)

			// calculate direction
			camera.current.getWorldDirection(walkDirection.current)
			walkDirection.current.y = 0
			walkDirection.current.normalize()

			walkDirection.current.applyAxisAngle(rotateAngle.current, direction)

			// run/walk velocity
			// move model & camera
			const moveX = walkDirection.current.x * walkVelocity * delta
			const moveZ = walkDirection.current.z * walkVelocity * delta

			model.current.position.x += moveX
			model.current.position.z += moveZ
		}
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
