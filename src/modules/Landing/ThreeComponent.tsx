import {FunctionComponent, useEffect, useRef} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';


interface ThreeProps {

}

const ThreeComponent: FunctionComponent<ThreeProps> = () => {
	const container = useRef<HTMLDivElement>(null)
	const scene = useRef(new THREE.Scene())
	const camera = useRef<THREE.Camera>(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 100 ))
	const renderer = useRef(new THREE.WebGLRenderer( { antialias: true } ))
	const model = useRef(new THREE.Scene())
	const mixer = useRef<THREE.AnimationMixer>(null)
	const previousAction = useRef<THREE.AnimationAction>(null)
	const activeAction = useRef<THREE.AnimationAction>(null)
	const actions = useRef<THREE.AnimationAction[]>([])
	const clock = useRef(new THREE.Clock())

	function onWindowResize() {

		// @ts-ignore
		camera.current.aspect = window.innerWidth / window.innerHeight;
		// @ts-ignore
		camera.current.updateProjectionMatrix();

		renderer.current.setSize( window.innerWidth, window.innerHeight );

	}

	useEffect(() => {
		camera.current.position.set( -20, 30, -20 );
		camera.current.lookAt( new THREE.Vector3( 0, 2, 0 ) );

		scene.current.fog = new THREE.Fog( 0xe0e0e0, 20, 100 );
		scene.current.background = new THREE.Color( 0xbfe3dd );

		const pmremGenerator = new THREE.PMREMGenerator( renderer.current );

		scene.current.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.01 ).texture;


		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		hemiLight.position.set( 0, 20, 0 );
		scene.current.add( hemiLight );

		const dirLight = new THREE.DirectionalLight( 0xffffff );
		dirLight.position.set( 0, 20, 10 );
		scene.current.add( dirLight );

		// ground
		const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
		mesh.rotation.x = - Math.PI / 2;
		scene.current.add( mesh );

		// model
		const loader = new GLTFLoader();
		loader.load( './3dModels/Robot.glb', function ( gltf ) {

			// @ts-ignore
			model.current = gltf.scene;
			scene.current.add( model.current );

			makeFirstAction( model.current, gltf.animations );

		}, undefined, function ( e ) {

			console.error( e );

		} );

		renderer.current.setPixelRatio( window.devicePixelRatio );
		renderer.current.setSize( window.innerWidth, window.innerHeight );
		renderer.current.outputEncoding = THREE.sRGBEncoding;
		container.current.appendChild( renderer.current.domElement );

		window.addEventListener( 'resize', onWindowResize );

		function makeFirstAction( modelCurrent: any, animations: any ) {
			mixer.current = new THREE.AnimationMixer(modelCurrent);

			const actions: any = {};

			for ( let i = 0; i < animations.length; i ++ ) {
				const clip = animations[i];

				actions[clip.name] = mixer.current.clipAction(clip);
			}

			activeAction.current = actions['Walking'];

			activeAction.current.play();
		}

		function animate() {
			const dt = clock.current.getDelta();

			if ( mixer.current ) mixer.current.update( dt );

			const time = performance.now() / 850;

			model.current.position.set( 1, time % 100, time % 100 );

			requestAnimationFrame(animate);

			renderer.current.render( scene.current, camera.current );
		}
		animate();
	}, [])

	return <div ref={container} />
}

export default ThreeComponent
