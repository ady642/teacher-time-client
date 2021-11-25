import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import useModels from "@/modules/Landing/ChooseBetweenTeacherAndStudent/hooks/useModels";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import styles from '@/modules/Landing/homeStyles.module.scss'

interface ThreeProps {

}

const ThreeComponent: FunctionComponent<ThreeProps> = () => {
	//Init
	const container = useRef<HTMLDivElement>(null)
	const scene = useRef(new THREE.Scene())
	const camera = useRef<THREE.Camera>(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 300 ))
	const renderer = useRef(new THREE.WebGLRenderer( { antialias: true } ))
	const clock = useRef(new THREE.Clock())
	const controls = useRef(new OrbitControls(camera.current, renderer.current.domElement))

	const { loadModel, earthModel } = useModels({ scene })

	function onWindowResize() {
		// @ts-ignore
		camera.current.aspect = container.current.clientWidth / container.current.clientHeight;
		// @ts-ignore
		camera.current.updateProjectionMatrix();

		renderer.current.setSize( container.current.clientWidth, container.current.clientHeight );
	}

	function animate() {
		const delta = clock.current.getDelta();

		earthModel.current.rotation.y += delta * 0.2

		requestAnimationFrame(animate);

		renderer.current.render( scene.current, camera.current );
	}

	useEffect(() => {
		loadModel()

		scene.current.background = new THREE.Color( 0xfbfbfd );

		const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0xFBFBFD , depthWrite: true } ) );
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		scene.current.add( mesh );

		controls.current.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.current.dampingFactor = 0.2;
		controls.current.screenSpacePanning = false;
		controls.current.maxPolarAngle = Math.PI / 2;
		controls.current.maxDistance = 100
		controls.current.minDistance = 20
		controls.current.target = new THREE.Vector3(0, 16, 0)

		camera.current.position.set( -20, 20, 50 );
		camera.current.lookAt(new THREE.Vector3(-10, 15, -10));

		controls.current.update();

		const ambilentLight = new THREE.AmbientLight( 0xffffff, 0.5)
		scene.current.add(ambilentLight)

		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
		hemiLight.position.set(0, 500, 30);
		scene.current.add( hemiLight );

		const dirLight = new THREE.DirectionalLight( 0xffffff, 0.1 );
		dirLight.position.set(-10, 50, 50);
		dirLight.castShadow = true;
		scene.current.add( dirLight );

		renderer.current.shadowMap.enabled = true;
		renderer.current.setPixelRatio( window.devicePixelRatio );
		container.current.appendChild(renderer.current.domElement);

		window.addEventListener( 'resize', onWindowResize );

		onWindowResize()

		animate();
	}, [])

	return <div
		className={styles['landing__models']}
		tabIndex={0}
		ref={container}
	/>
}

export default ThreeComponent
