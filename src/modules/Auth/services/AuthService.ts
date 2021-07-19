import { Client } from "@/common/utils/client";
import RegistrationForm from "@/modules/Auth/models/RegistrationForm";

export default class AuthClient extends Client{
	async signIn(provider: string) {
    	document.location.href = `${process.env.SERVER_URL}/${provider}`
	}
	async register(registrationForm: RegistrationForm) {
		await this.client.post(`${process.env.SERVER_URL}/register`, registrationForm)
	}
}
