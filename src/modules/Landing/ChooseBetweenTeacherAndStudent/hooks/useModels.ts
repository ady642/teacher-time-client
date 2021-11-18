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
		const mtlLoader = new MTLLoader(manager).setPath( './3dModels/' )
		const objLoader = new OBJLoader(manager).setPath( './3dModels/' )

		mtlLoader
			.load( 'whiteboard.mtl', function ( materials ) {
				materials.preload();
				objLoader
					.setMaterials(materials)
					.load( 'whiteboard.obj', function ( object ) {
						// @ts-ignore
						model.current = object

						object.translateX(240)
						object.translateZ(-100)

						scene.current.add( object );
					});
			})
		mtlLoader
			.load( 'TeacherAlone.mtl', function ( materials ) {
				materials.preload();
				objLoader
					.setMaterials(materials)
					.load( 'TeacherAlone.obj', function ( object ) {
						// @ts-ignore
						model.current = object

						object.lookAt(-180, 50, 400)

						scene.current.add( object );
					});
			})


	}

	return {
		loadModel,
		model,
		animationsMap
	}
}
