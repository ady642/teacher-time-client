import {MutableRefObject, useRef} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

type useModelsPayload = {
	initActions: (model: any, animations: any) => void;
	scene: MutableRefObject<THREE.Scene>;
	mixer: MutableRefObject<THREE.AnimationMixer>
}

export default ({ initActions, scene, mixer }: useModelsPayload) => {
	const model = useRef(new THREE.Scene())
	const animationsMap = new Map()

	const loadModel = () => {
		const loader = new GLTFLoader();
		loader.load( './3dModels/Robot.glb', function ( gltf ) {

			// @ts-ignore
			model.current = gltf.scene;
			scene.current.add( model.current );

			gltf.animations.filter(a => a.name === 'TPose').forEach((a: THREE.AnimationClip) => {
				animationsMap.set(a.name, mixer.current.clipAction(a))
			})

			initActions( model.current, gltf.animations );
		}, undefined, function ( e ) {
			console.error( e );
		});
	}

	return {
		loadModel,
		model,
		animationsMap
	}
}
