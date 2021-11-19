import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import useModels from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useModels";
import useKeyboardEvents from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useKeyboardEvents";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

interface ThreeProps {

}

const ThreeComponent: FunctionComponent<ThreeProps> = () => {
	//Init
	const container = useRef<HTMLDivElement>(null)
	const scene = useRef(new THREE.Scene())
	const camera = useRef<THREE.Camera>(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 300 ))
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

		scene.current.background = new THREE.Color( 'transparent' );

		scene.current.add(new THREE.AxesHelper( 5 ));

		const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		scene.current.add( mesh );

		controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.current.dampingFactor = 0.2;
		controls.current.screenSpacePanning = false;
		controls.current.maxPolarAngle = Math.PI / 2;
		controls.current.maxDistance = 200
		controls.current.minDistance = 20
		controls.current.target = new THREE.Vector3(0, 16, 0)

		camera.current.position.set( -3, 17, 8 );
		camera.current.lookAt(new THREE.Vector3( 0, 15, 0 ));
		controls.current.update();

		scene.current.background = new THREE.Color( 0xFFFFFF );
		scene.current.fog = new THREE.Fog( 0xa0a0a0, 10, 2000 );

		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		hemiLight.position.set( 0, 20, 10 );
		scene.current.add( hemiLight );

		const dirLight = new THREE.DirectionalLight( 0xffffff );
		dirLight.position.set( -10, 20, 40 );
		dirLight.castShadow = true;
		dirLight.shadow.camera.top = 2;
		dirLight.shadow.camera.bottom = - 2;
		dirLight.shadow.camera.left = - 2;
		dirLight.shadow.camera.right = 2;
		dirLight.shadow.camera.near = 0.1;
		dirLight.shadow.camera.far = 40;
		scene.current.add( dirLight );

		renderer.current.shadowMap.enabled = true;
		renderer.current.toneMapping = THREE.ReinhardToneMapping
		renderer.current.setPixelRatio( window.devicePixelRatio );
		renderer.current.setSize( window.innerWidth, window.innerHeight );
		renderer.current.outputEncoding = THREE.sRGBEncoding;
		container.current.appendChild(renderer.current.domElement);

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
