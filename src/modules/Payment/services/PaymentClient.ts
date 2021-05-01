import client from "@/common/utils/client";

interface PayPayload {
    email: string,
    amount: number
}

const paymentIntent = async ({ email, amount }: PayPayload) => {
	const {data: clientSecret} = await client.post(`${process.env.SERVER_URL}/payment/stripe/intent`, {
		email,
		amount,
	});

	return clientSecret
}

const addCredits = async ({ email, amount }: PayPayload) => {
	await client.post(`${process.env.SERVER_URL}/payment/stripe/add_credits`, {
		email,
		amount,
	});
}

const getBalance = async (email: string) => {
	await client.post(`${process.env.SERVER_URL}/payment/stripe/get_balance/${email}`);
}

const usePaymentClient = () => ({
	paymentIntent,
	addCredits,
	getBalance
})

export default usePaymentClient
