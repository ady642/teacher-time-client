import {
	CLOSE_SIGN_IN_MODAL,
	OPEN_SIGN_IN_MODAL,
	SET_TOKEN,
	RESET_TOKEN,
	SET_USER,
	CLOSE_REGISTER_MODAL,
	OPEN_REGISTER_MODAL
} from "@/context/auth/reducers/reducersTypes";
import Cookies from 'js-cookie'
import {StateInterface} from "@/context/state/state";

const authReducer = (state: StateInterface, action: { payload: any, type: string }) => {
	switch (action.type) {
	case SET_USER:
		return { ...state, auth: { ...state.auth, user: action.payload  }};
	case RESET_TOKEN:
		Cookies.remove('token')
		return {...state, auth: { ...state.auth, token: '' }}
	case SET_TOKEN:
		Cookies.set('token', action.payload);
		return {...state, auth: { ...state.auth, token: action.payload }}
	case OPEN_SIGN_IN_MODAL:
		return { ...state, auth: {...state.auth, signInModalOpened: true }};
	case CLOSE_SIGN_IN_MODAL:
		return { ...state, auth: {...state.auth, signInModalOpened: false }};
	case OPEN_REGISTER_MODAL:
		return { ...state, auth: {...state.auth, registerModalOpened: true }};
	case CLOSE_REGISTER_MODAL:
		return { ...state, auth: {...state.auth, registerModalOpened: false }};
	default:
		return {...state};
	}
}

export default authReducer
