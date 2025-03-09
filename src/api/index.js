import config from 'config'
import YF from 'ya-fetch'
import { generatePath } from 'react-router'
import { API_GET_PAGE, API_GET_PICTURES } from '../constants'

export const api = YF.create({
  prefixUrl: config.isServer ? `http://${config.host}:${config.port}` : ''
})

export const fetchPage = (data) =>
  api.get(generatePath(API_GET_PAGE, data)).then((res) => res.json())

export const fetchPictures = (data) =>
  api.get(generatePath(API_GET_PICTURES, data)).then((res) => res.json())
