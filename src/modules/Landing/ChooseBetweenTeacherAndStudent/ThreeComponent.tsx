import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import useModels from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useModels";
import useKeyboardEvents from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useKeyboardEvents";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

interface ThreeProps {

}

const ThreeComponent: FunctionComponent<ThreeProps> = () => {
	const container = useRef<HTMLDivElement>(null)
	const scene = useRef(new THREE.Scene())
	const camera = useRef<THREE.Camera>(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 10000 ))
	const renderer = useRef(new THREE.WebGLRenderer( { antialias: true } ))
	const mixer = useRef<THREE.AnimationMixer>(null)
	const clock = useRef(new THREE.Clock())
	const controls = useRef(new OrbitControls(camera.current, renderer.current.domElement))

	const walkDirection = useRef(new THREE.Vector3())
	const rotateAngle = useRef(new THREE.Vector3(0, 1, 0))
	const rotateQuarternion = useRef(new THREE.Quaternion())

	const keysPressed = useRef({})

	const { loadModel, model, animationsMap } = useModels({ scene, mixer })
	const { chooseDirection, move } = useKeyboardEvents({
		keysPressed, model, walkDirection, rotateAngle, rotateQuarternion, camera, mixer, animationsMap
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

		controls.current.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

		requestAnimationFrame(animate);

		renderer.current.render( scene.current, camera.current );
	}

	useEffect(() => {
		controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.current.dampingFactor = 0.05;
		controls.current.screenSpacePanning = false;
		controls.current.maxPolarAngle = Math.PI / 2;

		camera.current.position.set( 20, 190, -30 );
		camera.current.lookAt( new THREE.Vector3( 0, 2, 0 ) );

		scene.current.background = new THREE.Color( 0xeeeeee );

		const pmremGenerator = new THREE.PMREMGenerator( renderer.current );

		scene.current.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.01 ).texture;


		const ambient = new THREE.AmbientLight(0xFFFFFA); //most black
		scene.current.add( ambient );

		var directionalLight = new THREE.DirectionalLight( 0xAAAAAA ); //to see shaders
		directionalLight.position.set( 0, 0, -100 ).normalize(); //front of scene
		scene.current.add( directionalLight );

		// ground
		const mesh = new THREE.Mesh(
			new THREE.PlaneGeometry( 2000, 2000 ),
			new THREE.MeshPhongMaterial( { color: 0xaaaaaa, depthWrite: false } )
		);
		mesh.rotation.x = - Math.PI / 2;
		scene.current.add( mesh );

		loadModel()

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
