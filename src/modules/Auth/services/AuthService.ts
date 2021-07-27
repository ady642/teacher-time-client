import { Client } from "@/common/utils/client";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";
import User from "@/modules/Auth/types/User";

export default class AuthClient extends Client{
	async signIn(provider: string) {
    	document.location.href = `${process.env.SERVER_URL}/${provider}`
	}
	async register(registrationForm: RegistrationForm): Promise<{ token: string, user: User }> {
		const { data } = await this.client.post(`${process.env.SERVER_URL}/register`, registrationForm)
		return data
	}
}
