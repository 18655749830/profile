import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"
import { CustomMessage } from '@/utils/globle'

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use(config => {
      config.headers.token = localStorage.getItem('token') || ''
      return config
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      CustomMessage.warning(err.response.data)
      // return err.response.data
      console.log(err);
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

const request = new Request(BASE_URL, TIMEOUT)

export default request

