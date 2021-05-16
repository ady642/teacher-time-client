import {Client} from "@/common/utils/client";

export default class AuthClient extends Client{
	async signIn(provider: string) {
    	document.location.href = `${process.env.SERVER_URL}/${provider}`
	}
}
