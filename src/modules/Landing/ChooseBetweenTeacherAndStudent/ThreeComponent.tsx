import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import useModels from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useModels";
import useKeyboardEvents from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useKeyboardEvents";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

interface ThreeProps {

}

const ThreeComponent: FunctionComponent<ThreeProps> = () => {
	//Init
	const container = useRef<HTMLDivElement>(null)
	const scene = useRef(new THREE.Scene())
	const camera = useRef<THREE.Camera>(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 1000 ))
	const renderer = useRef(new THREE.WebGLRenderer( { antialias: true } ))
	const mixer = useRef<THREE.AnimationMixer>(null)
	const clock = useRef(new THREE.Clock())
	const controls = useRef(new OrbitControls(camera.current, renderer.current.domElement))

	const walkDirection = useRef(new THREE.Vector3())
	const rotateAngle = useRef(new THREE.Vector3(0, 1, 0))
	const rotateQuarternion = useRef(new THREE.Quaternion())

	const keysPressed = useRef({})

	const { loadModel, model, animationsMap } = useModels({ scene })
	const { chooseDirection, move } = useKeyboardEvents({
		keysPressed, model, walkDirection, rotateAngle, rotateQuarternion, camera, animationsMap
	})


	function onWindowResize() {
		// @ts-ignore
		camera.current.aspect = window.innerWidth / window.innerHeight;
		// @ts-ignore
		camera.current.updateProjectionMatrix();

		renderer.current.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {
		const delta = clock.current.getDelta();

		if ( mixer.current ) mixer.current.update(delta);

		if(animationsMap.current.size > 0) {
			move(delta)
		}

		requestAnimationFrame(animate);

		renderer.current.render( scene.current, camera.current );
	}

	useEffect(() => {
		loadModel()

		scene.current.add(new THREE.AxesHelper( 5 ));

		controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.current.dampingFactor = 0.05;
		controls.current.screenSpacePanning = false;
		controls.current.maxPolarAngle = Math.PI / 2;
		controls.current.maxDistance = 600
		controls.current.minDistance = 100
		controls.current.target = new THREE.Vector3(0, 150, 0)

		camera.current.position.set( -100, 200, 400 );
		camera.current.lookAt(new THREE.Vector3( 0, 150, 0 ));
		controls.current.update();

		const ambient = new THREE.AmbientLight(0xFFFFFF, 1);
		scene.current.add( ambient );

		const color = 0x999;
		const intensity = 0.5;
		const light = new THREE.SpotLight(color, intensity);
		light.position.set(0, 1000, 0);
		light.target.position.set(-5, 0, 0);
		scene.current.add(light);
		scene.current.add(light.target);

		const helper = new THREE.SpotLightHelper(light);
		scene.current.add(helper);


		renderer.current.setPixelRatio( window.devicePixelRatio );
		renderer.current.setSize( window.innerWidth, window.innerHeight );
		renderer.current.outputEncoding = THREE.sRGBEncoding;
		container.current.appendChild( renderer.current.domElement );

		window.addEventListener( 'resize', onWindowResize );

		animate();
	}, [])

	return <div
		tabIndex={0}
		onKeyDownCapture={(e) => chooseDirection(e)}
		onKeyUp={(e) => chooseDirection(e, false)}
		ref={container}
	/>
}

export default ThreeComponent
