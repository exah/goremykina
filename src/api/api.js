import config from 'config'
import { createApi } from '../utils'

const api = createApi(config.isServer ? `http://${config.host}:${config.port}` : '')

export {
  api
}
