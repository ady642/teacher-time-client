import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import useModels from "@/modules/Landing/Teacher/hooks/useModels";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import styles from '@/modules/Landing/homeStyles.module.scss'
import LandingContentLeft from "@/modules/Landing/Teacher/LandingContent/LandingContentLeft";
import loadLights from "@/modules/Landing/Teacher/hooks/useLights";

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
		//loadModel()

		scene.current.background = new THREE.Color( 0xfbfbfd );

		const floorGeometry = new THREE.CircleGeometry(100, 360, 0, 90);
		const floorMaterial = new THREE.MeshPhongMaterial({
			color: 0xB9B3B3,
			wireframe: false
		});
		const floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.rotation.x = -Math.PI * 0.5;
		floor.position.z = 0;
		floor.position.x = 0;
		floor.position.y = 0;
		floor.receiveShadow = true;
		scene.current.add(floor);

		controls.current.enableDamping = true;
		controls.current.dampingFactor = 0.2;
		controls.current.screenSpacePanning = false;
		controls.current.maxPolarAngle = Math.PI / 2;
		controls.current.maxDistance = 100
		controls.current.minDistance = 20
		controls.current.target = new THREE.Vector3(0, 16, 0)

		camera.current.position.set( -10, 20, 45 );
		camera.current.lookAt(new THREE.Vector3(-10, 15, -10));

		controls.current.update();

		loadLights(scene, teacherModel)

		scene.current.translateX(20);

		renderer.current.shadowMap.enabled = true;
		renderer.current.setPixelRatio(window.devicePixelRatio);
		container.current.appendChild(renderer.current.domElement);

		onWindowResize()

		window.addEventListener('resize', onWindowResize)

		//animate();

		return () => {
			window.removeEventListener('resize', onWindowResize)
		}
	}, [])

	return <div
		className={styles['landing__models']}
		tabIndex={0}
		ref={container}
	>
		<LandingContentLeft />
	</div>
}

export default ThreeComponent
