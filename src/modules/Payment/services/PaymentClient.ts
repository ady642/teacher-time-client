import createAxiosInstance from "@/common/utils/client";

const paymentIntent = async (amount: number) => {
	const {data: clientSecret} = await client.post(`${process.env.SERVER_URL}/payment/stripe/intent`, {
		amount,
	});

	return clientSecret
}

const addCredits = async (amount: number) => {
	await client.post(`${process.env.SERVER_URL}/payment/stripe/add_credits`, {
		amount,
	});
}

const getBalance = async ({ token }: { token: string }): Promise<number> => {
	const { data: balance } = await client.get(`${process.env.SERVER_URL}/payment/stripe/get_balance`, {
		headers: {
			authorization: ` Bearer ${token}`
		}
	});

	return balance
}

const usePaymentClient = () => ({
	paymentIntent,
	addCredits,
	getBalance,
})
