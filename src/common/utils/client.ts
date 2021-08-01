import axios, {AxiosInstance} from 'axios'
import { io } from "socket.io-client";

export const socket = io(process.env.SERVER_URL, { secure: true });

export class Client {
	client: AxiosInstance

	constructor(token?: string) {
		this.client = createAxiosInstance(token)
	}
}

const createAxiosInstance = (token: string = '') => axios.create({
	headers: {
		authorization: `Bearer ${token}`
	}
})

export default createAxiosInstance
