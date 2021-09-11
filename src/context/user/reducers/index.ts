import {SET_TEACHER} from "@/context/user/reducers/reducersTypes";
import {StateInterface} from "@/context/state/state";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

type actionType = { payload: Teacher, type: 'SET_TEACHER' }

const paymentReducer = (state: StateInterface, action: actionType) => {
	switch (action.type) {
	case SET_TEACHER:
		console.log('je suis dans le reducer')
		return { ...state, user: { ...state.user, teacher: action.payload }}
	default:
		return state;
	}
}

export default paymentReducer
