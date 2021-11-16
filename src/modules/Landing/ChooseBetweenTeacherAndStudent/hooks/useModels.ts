import {MutableRefObject, useRef} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";

type useModelsPayload = {
	scene: MutableRefObject<THREE.Scene>;
	mixer: MutableRefObject<THREE.AnimationMixer>
}

export default ({ scene, mixer }: useModelsPayload) => {
	const model = useRef(new THREE.Scene())
	const animationsMap = useRef(new Map())

	const loadModel = () => {
		const loader = new OBJLoader();

		// instantiate a loader
		const textureLoader = new THREE.TextureLoader();


		// load a resource
		loader.load(
			// resource URL
			'3dModels/teacher.obj',
			// called when resource is loaded
			function ( object ) {


				// load a resource
				textureLoader.load(
					// resource URL
					'3dModels/texture/teacher_tex.png',

					// onLoad callback
					function ( texture ) {
						// in this example we create the material when the texture is loaded
						const material = new THREE.MeshBasicMaterial( {
							map: texture
						} );


						// @ts-ignore
						const mesh = new THREE.Mesh( object, material );
						scene.current.add( mesh )
					},

					// onProgress callback currently not supported
					undefined,

					// onError callback
					function ( err ) {
						console.error( 'An error happened.' );
					}
				);
			},
			// called when loading is in progresses
			function ( xhr ) {

				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

			},
			// called when loading has errors
			function ( error ) {

				console.log( 'An error happened' );

			}
		);
	}

	return {
		loadModel,
		model,
		animationsMap
	}
}
