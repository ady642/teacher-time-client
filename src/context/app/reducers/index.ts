import {SET_APP_LOADING} from "@/context/app/reducers/reducersTypes";

const authReducer = (state: any, action: { payload: any, type: string }) => {
	switch (action.type) {
	case SET_APP_LOADING:
		return {...state, app: { loading: action.payload }}
	default:
		return {...state};
	}
}

export default authReducer
