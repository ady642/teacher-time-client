import {SET_BALANCE} from "@/context/payment/reducers/reducersTypes";

const paymentReducer = (state: any, action: { payload: any, type: string }) => {
	switch (action.type) {
	case SET_BALANCE:
		return {...state, payment: { ...state.payment, balance: action.payload }}
	default:
		return state;
	}
}

export default paymentReducer
