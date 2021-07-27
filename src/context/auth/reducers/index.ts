import {
	CLOSE_SIGN_IN_MODAL,
	OPEN_SIGN_IN_MODAL,
	SET_TOKEN,
	RESET_TOKEN,
	SET_USER
} from "@/context/auth/reducers/reducersTypes";
import Cookies from 'js-cookie'
import {StateInterface} from "@/context/state/state";

const authReducer = (state: StateInterface, action: { payload: any, type: string }) => {
	switch (action.type) {
	case SET_USER:
		return { ...state, auth: { user: action.payload, ...state.auth }};
	case RESET_TOKEN:
		Cookies.remove('token')
		return {...state, auth: { token: '', ...state.auth }}
	case SET_TOKEN:
		Cookies.set('token', action.payload);
		return {...state, auth: { token: action.payload, ...state.auth }}
	case OPEN_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: true, ...state.auth }};
	case CLOSE_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: false, ...state.auth }};
	default:
		return {...state};
	}
}

export default authReducer
