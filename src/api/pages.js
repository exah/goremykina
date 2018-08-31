import pathToRegexp from 'path-to-regexp'
import { API_GET_PAGE } from '../constants'
import { api } from './api'

const pagePath = pathToRegexp.compile(API_GET_PAGE)
const getPage = (data) => api.get(pagePath(data))

export {
  getPage
}
