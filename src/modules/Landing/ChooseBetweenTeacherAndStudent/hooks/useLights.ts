import * as THREE from "three";
import {MutableRefObject} from "react";

const loadLights = (scene: MutableRefObject<THREE.Scene>, teacherModel: MutableRefObject<THREE.Object3D>) => {
	const ambientLight = new THREE.AmbientLight( 0xfbfbfd, 0.6)
	scene.current.add(ambientLight)

	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.8);
	hemiLight.position.set(0, 500, 30);
	scene.current.add( hemiLight );

	const dirLight = new THREE.DirectionalLight( 0xfbfbfd, 0.3);
	dirLight.position.set(-50, 30, 30);
	dirLight.castShadow = true;
	dirLight.target = teacherModel.current
	dirLight.shadow.camera.top = 30
	dirLight.shadow.camera.bottom = -10
	dirLight.shadow.camera.left = -30
	dirLight.shadow.camera.right = 30
	scene.current.add( dirLight );
}

export default loadLights
