import { generatePath } from 'react-router'
import config from 'config'
import { createApi } from '../utils'
import { API_GET_PAGE, API_GET_PICTURES } from '../constants'

export const api = createApi(
  config.isServer ? `http://${config.host}:${config.port}` : ''
)

export const getPage = (data) => api.get(generatePath(API_GET_PAGE, data))
export const getPicturs = (data) =>
  api.get(generatePath(API_GET_PICTURES, data))
