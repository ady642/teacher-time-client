import axios, {AxiosInstance} from 'axios'
// @ts-ignore
import socketIO from 'socket.io-client';

export const socket = socketIO.connect(process.env.SOCKET_SERVER);

export class Client {
	client: AxiosInstance

	constructor(token: string) {
		this.client = createAxiosInstance(token)
	}
}

const createAxiosInstance = (token: string) => axios.create({
	headers: {
		authorization: `Bearer ${token}`
	}
})

export default createAxiosInstance
