import {MutableRefObject, useRef} from "react";
import * as THREE from "three";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";

type useModelsPayload = {
	scene: MutableRefObject<THREE.Scene>;
}

export default ({ scene }: useModelsPayload) => {
	const model = useRef(new THREE.Scene())
	const animationsMap = useRef(new Map())

	const loadModel = () => {
		const manager = new THREE.LoadingManager();
		manager.addHandler( /\.dds$/i, new DDSLoader() );

		// manager.addHandler( /\.tga$/i, new TGALoader() );

		new MTLLoader( manager )
			.setPath( './3dModels/' )
			.load( 'Teacher.mtl', function ( materials ) {

				materials.preload();

				new OBJLoader( manager )
					.setMaterials( materials )
					.setPath( './3dModels/' )
					.load( 'Teacher.obj', function ( object ) {
						// @ts-ignore
						model.current = object

						object.translateY(-80)

						scene.current.add( object );
					});
			} );
	}

	return {
		loadModel,
		model,
		animationsMap
	}
}
