import * as THREE from "three";
import {MutableRefObject, useRef} from "react";

type useActionsPayload = {
	mixer: MutableRefObject<THREE.AnimationMixer>
}

const states = <const>[ 'Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing' ]

type Actions = {
	[key: string]: any
}

const useActions = ({
						mixer
					}: useActionsPayload) => {
	const previousAction = useRef<THREE.AnimationAction>(null)
	const activeAction = useRef<THREE.AnimationAction>(null)
	const actions = useRef<Actions>({})

	const fadeToAction = ( name: string, duration = 0.5 ) => {
		previousAction.current = activeAction.current;
		activeAction.current = actions.current[name];

		if ( previousAction !== activeAction && previousAction.current ) {
			previousAction.current.fadeOut( duration );
		}

		activeAction
			.current
			.reset()
			.setEffectiveTimeScale(1)
			.setEffectiveWeight(1)
			.fadeIn(duration)
			.play();
	}


	const initActions = ( modelCurrent: any, animations: any ) => {
		mixer.current = new THREE.AnimationMixer(modelCurrent);

		for ( let i = 0; i < animations.length; i ++ ) {
			const clip: any  = animations[i];

			actions.current[clip.name] = mixer.current.clipAction(clip);
		}

		playAction('Idle');
	}

	const playAction = (name: string) => {
		fadeToAction(name)
	}

	return {
		initActions,
		playAction
	}
}

export default useActions
