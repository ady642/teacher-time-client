import {useAppContext} from "@/context";

const usePaymentGetters = () => {
	const { state } = useAppContext()

	const balance = state.payment.balance / 100

	return {
		balance
	}
}

export default usePaymentGetters
