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
	const camera = useRef(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 300 ))
	const renderer = useRef(new THREE.WebGLRenderer( { antialias: true, alpha: true } ))
	const clock = useRef(new THREE.Clock())
	const controls = useRef(new OrbitControls(camera.current, renderer.current.domElement))

	const { loadModel, earthModel, teacherModel } = useModels({ scene })

	function onWindowResize() {
		camera.current.aspect = container.current.clientWidth / container.current.clientHeight;
		camera.current.updateProjectionMatrix();

		renderer.current.setSize( container.current.clientWidth, container.current.clientHeight );
	}

	function animate() {
		const delta = clock.current.getDelta();

		earthModel.current.rotation.y += delta * 0.2

		requestAnimationFrame(animate);

		renderer.current.render(scene.current, camera.current);
	}

	useEffect(() => {
		loadModel()

		scene.current.background = new THREE.Color( 0xfbfbfd );

		const floorGeometry = new THREE.CircleGeometry(100, 360, 0, 90);
		const floorMaterial = new THREE.MeshPhongMaterial({
			color: 0xA79797,
			wireframe: false
		});
		const floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.rotation.x = -Math.PI * 0.5;
		floor.position.z = 0;
		floor.position.x = 0;
		floor.position.y = 0;
		floor.receiveShadow = true;
		scene.current.add(floor);

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

		const ambientLight = new THREE.AmbientLight( 0xffffff, 0.6)
		scene.current.add(ambientLight)

		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.8);
		hemiLight.position.set(0, 500, 30);
		scene.current.add( hemiLight );

		const dirLight = new THREE.DirectionalLight( 0xfbfbfd, 0.6);
		dirLight.position.set(-50, 30, 30);
		dirLight.castShadow = true;
		dirLight.target = teacherModel.current
		dirLight.shadow.camera.top = 30
		dirLight.shadow.camera.bottom = -10
		dirLight.shadow.camera.left = -30
		dirLight.shadow.camera.right = 30
		scene.current.add( dirLight );

		scene.current.add(new THREE.CameraHelper(dirLight.shadow.camera))

		renderer.current.shadowMap.enabled = true;
		renderer.current.setPixelRatio( window.devicePixelRatio );
		container.current.appendChild(renderer.current.domElement);

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
