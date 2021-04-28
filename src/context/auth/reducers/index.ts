import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, SIGN_IN, SIGN_OUT} from "@/context/auth/reducers/reducersTypes";
import client from "@/common/utils/client";

const authReducer = async (state: any, action: { payload: any, type: string }) => {
	switch (action.type) {
	/*	case SIGN_OUT:
		return state
	case SIGN_IN:
		await client.get(`${process.env.SERVER_URL}/${action.payload}`)
		return state*/
	case OPEN_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: true }};
	case CLOSE_SIGN_IN_MODAL:
		return { ...state, auth: {signInModalOpened: false }};
	default:
		return state;
	}
}

export default authReducer
