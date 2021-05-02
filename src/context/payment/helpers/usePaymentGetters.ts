import {useAppContext} from "@/context";

const usePaymentGetters = () => {
	const { state } = useAppContext()

	const balance = state.payment.balance

	return {
		balance
	}
}

export default usePaymentGetters
