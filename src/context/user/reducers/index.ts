import {SET_TEACHER, SET_TEACHER_AVAILABLE} from "@/context/user/reducers/reducersTypes";
import {StateInterface} from "@/context/state/state";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

type actionType = { payload: Teacher, type: 'SET_TEACHER' | 'SET_TEACHER_AVAILABLE' }

const userReducers = (state: StateInterface, action: actionType) => {
	switch (action.type) {
	case SET_TEACHER:
		return { ...state, user: { ...state.user, teacher: action.payload }}
	case SET_TEACHER_AVAILABLE:
		return { ...state, user: { ...state.user, available: action.payload }}
	default:
		return state;
	}
}

export default userReducers
