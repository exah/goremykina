import pathToRegexp from 'path-to-regexp'

import {
  API_GET_PAGE,
  API_GET_PICTURES
} from '../constants'

import { api } from './api'

const pagePath = pathToRegexp.compile(API_GET_PAGE)
const picturesPath = pathToRegexp.compile(API_GET_PICTURES)

const getPage = (data) => api.get(pagePath(data))
const getPicturs = (data) => api.get(picturesPath(data))

export {
  api,
  getPage,
  getPicturs
}
