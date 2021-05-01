import axios from 'axios'
import Cookies from "js-cookie";

const token = Cookies.get('token')

const axiosInstance = axios.create()
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axiosInstance.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axiosInstance
