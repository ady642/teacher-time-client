import {SET_TEACHER} from "@/context/user/reducers/reducersTypes";
import {StateInterface} from "@/context/state/state";
import {Teacher} from "@/modules/Teachers/models/Entity/Teacher";

type actionType = { payload: Teacher, type: 'SET_TEACHER' }

const userReducers = (state: StateInterface, action: actionType) => {
	switch (action.type) {
	case SET_TEACHER:
		return { ...state, user: { ...state.user, teacher: action.payload }}
	default:
		return state;
	}
}

export default userReducers
