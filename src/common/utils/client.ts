import axios from 'axios'

const createAxiosInstance = (token: string) => axios.create({
	headers: {
		authorization: `Bearer ${token}`
	}
})

export default createAxiosInstance
