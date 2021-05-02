import {useAppContext} from "@/context";
import {SET_BALANCE} from "@/context/payment/reducers/reducersTypes";

const usePaymentReducers = () => {
	const {dispatch} = useAppContext()

	const setBalance = (balance: number) => dispatch({type: SET_BALANCE, payload: balance})

	return {
		setBalance
	}
}

export default usePaymentReducers
