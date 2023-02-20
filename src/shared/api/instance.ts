import axios, {AxiosRequestConfig} from "axios";
import config from '../config'

const instance = axios.create({
  withCredentials: true,
  baseURL: config.baseUrl
})

instance.interceptors.request.use( async (config: AxiosRequestConfig) => {
  config.headers = config.headers ?? {};

  // Now config.headers can be safely used
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config;
},
(error) => error
)

export default instance
