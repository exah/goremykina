import config from 'config'
import axios from 'axios'

const api = axios.create({
  baseURL: config.isServer ? `http://${config.host}:${config.port}` : '/'
})

const apiResponseInterceptor = api.interceptors.response.use((res) => res.data)

export {
  api,
  apiResponseInterceptor
}
