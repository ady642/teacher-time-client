import {MutableRefObject, useRef} from "react";
import * as THREE from "three";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

type useModelsPayload = {
	scene: MutableRefObject<THREE.Scene>;
}

export default ({ scene }: useModelsPayload) => {
	const earthModel = useRef(new THREE.Object3D())
	const animationsMap = useRef(new Map())

	////////////////////////////////////////
	// create an Object3D of the given object
	// so that it is centered at +Y axis
	//
	function unitize(object: THREE.Object3D, targetSize: number) {

		// find bounding box of 'object'
		const box3 = new THREE.Box3();
		box3.setFromObject(object);
		const size = new THREE.Vector3();
		size.subVectors(box3.max, box3.min);
		const center = new THREE.Vector3();
		center.addVectors(box3.max, box3.min).multiplyScalar(0.5);

		console.log('center: ' + center.x + ', ' + center.y + ', ' + center.z);
		console.log('size: ' + size.x + ', ' + size.y + ', ' + size.z);

		// uniform scaling according to objSize
		const objSize = findMax(size);
		const scaleSet = targetSize / objSize;

		const theObject = new THREE.Object3D();
		theObject.add(object);
		object.scale.set(scaleSet, scaleSet, scaleSet);
		object.position.set(-center.x * scaleSet, -center.y * scaleSet + size.y / 2 * scaleSet, -center.z * scaleSet);

		return theObject;

		// helper function
		function findMax(v: THREE.Vector3) {
			if (v.x > v.y) {
				return v.x > v.z ? v.x : v.z;
			} else { // v.y > v.x
				return v.y > v.z ? v.y : v.z;
			}
		}
	}

	const loadModel = () => {
		const gtlfLoader = new GLTFLoader().setPath('./3dModels/');
		gtlfLoader.load( 'board.gltf', function ( object ) {
			const unitizedBoard = unitize(object.scene, 22)
			unitizedBoard.rotateY(-Math.PI / 10)

			scene.current.add( unitizedBoard );
		});
		gtlfLoader.load( 'earth.glb', function ( object ) {
			const unitizedObject = unitize(object.scene, 5)
			unitizedObject.translateZ(14)
			unitizedObject.translateY(20)
			unitizedObject.translateX(-17)

			earthModel.current = object.scene

			scene.current.add(unitizedObject);
		})

		const manager = new THREE.LoadingManager();
		manager.addHandler( /\.dds$/i, new DDSLoader() );
		const mtlLoader = new MTLLoader(manager).setPath('./3dModels/')
		const objLoader = new OBJLoader(manager).setPath('./3dModels/')

		mtlLoader
			.load( 'TeacherAlone.mtl', function ( materials ) {
				materials.preload();
				objLoader
					.setMaterials(materials)
					.load( 'TeacherAlone.obj', function ( object ) {
						// @ts-ignore
						const unitizedObject = unitize(object, 20)
						unitizedObject.lookAt(-200, 10, 400)
						unitizedObject.translateZ(10)
						unitizedObject.translateX(-5)

						scene.current.add(unitizedObject);
					});
			})
	}



	return {
		loadModel,
		earthModel,
		animationsMap
	}
}
