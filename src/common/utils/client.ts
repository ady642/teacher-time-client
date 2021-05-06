import axios from 'axios'
// @ts-ignore
import socketIO from 'socket.io-client';

export const socket = socketIO.connect(process.env.SOCKET_SERVER);

const createAxiosInstance = (token: string) => axios.create({
	headers: {
		authorization: `Bearer ${token}`
	}
})

export default createAxiosInstance
