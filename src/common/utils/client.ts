import axios from 'axios'

const axiosInstance = axios.create()
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default axiosInstance
