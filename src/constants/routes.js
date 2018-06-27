import { SUPPORTED_LANGS } from './langs'

export const ROUTE_LANG = `/:lang(${SUPPORTED_LANGS.join('|')})`
export const ROUTE_HOME = ROUTE_LANG + '/'
export const ROUTE_ABOUT = ROUTE_LANG + '/about'
export const ROUTE_PICTURE = ROUTE_LANG + '/:name'
