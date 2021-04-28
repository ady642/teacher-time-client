import UserSession from "@/common/types/UserSession";
import client from "@/common/utils/client";

interface PayPayload {
    user: UserSession,
    amount: number
}

const usePaymentClient = () => {
	const paymentIntent =  async ({ user, amount }: PayPayload) => {
		const {data: clientSecret} = await client.post("/api/payment/payment_intents", {
			amount,
			user
		});

		return clientSecret
	}

	return { paymentIntent }
}

export default usePaymentClient
