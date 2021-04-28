import {AxiosInstance} from "axios";

export default class AuthService {
    client: AxiosInstance

    constructor(client: AxiosInstance) {
    	this.client = client
    }

    async signIn(provider: string) {
    	document.location.href = `${process.env.SERVER_URL}/${provider}`
    }
}
