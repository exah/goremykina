import config from 'config'
import YF from 'ya-fetch'
import { generatePath } from 'react-router'
import { API_GET_PAGE, API_GET_PICTURES } from '../constants'

export const api = YF.create({
  prefixUrl: config.isServer ? `http://${config.host}:${config.port}` : ''
})

export const getPage = (data) =>
  api.get(generatePath(API_GET_PAGE, data)).json()

export const getPicturs = (data) =>
  api.get(generatePath(API_GET_PICTURES, data)).json()
