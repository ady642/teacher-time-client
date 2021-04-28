import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, SET_TOKEN, RESET_TOKEN} from "@/context/auth/reducers/reducersTypes";

const authReducer = (state: any, action: { payload: any, type: string }) => {
	switch (action.type) {
	case RESET_TOKEN:
		return {...state, auth: { token: '', signInModalOpened: state.auth.signInModalOpened }}
	case SET_TOKEN:
		return {...state, auth: { token: action.payload, signInModalOpened: state.auth.signInModalOpened }}
	case OPEN_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: true, token: state.auth.token }};
	case CLOSE_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: false, token: state.auth.token }};
	default:
		return {...state};
	}
}

export default authReducer
