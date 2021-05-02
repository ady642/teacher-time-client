import {AxiosInstance} from "axios";
import createAxiosInstance from "@/common/utils/client";

export default class PaymentClient {
	client: AxiosInstance

	constructor(token: string) {
		this.client = createAxiosInstance(token)
	}

	paymentIntent = async (amount: number) => {
		const {data: clientSecret} = await this.client.post(`${process.env.SERVER_URL}/payment/stripe/intent`, {
			amount,
		});

		return clientSecret
	}

	addCredits = async (amount: number) => {
		await this.client.post(`${process.env.SERVER_URL}/payment/stripe/add_credits`, {
			amount,
		});
	}

	getBalance = async (): Promise<number> => {
		const { data: balance } = await this.client.get(`${process.env.SERVER_URL}/payment/stripe/get_balance`);

		return balance
	}
}
