import pathToRegexp from 'path-to-regexp'
import config from 'config'
import { createApi } from '../utils'
import { API_GET_PAGE, API_GET_PICTURES } from '../constants'

export const api = createApi(
  config.isServer ? `http://${config.host}:${config.port}` : ''
)

const pagePath = pathToRegexp.compile(API_GET_PAGE)
const picturesPath = pathToRegexp.compile(API_GET_PICTURES)

export const getPage = (data) => api.get(pagePath(data))
export const getPicturs = (data) => api.get(picturesPath(data))
