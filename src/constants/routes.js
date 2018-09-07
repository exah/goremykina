import { SUPPORTED_LANGS } from './langs'

export const ROUTE_LANG = `/:lang(${SUPPORTED_LANGS.join('|')})`
export const ROUTE_HOME = ROUTE_LANG + '/picture/:slug?'
export const ROUTE_PAGE = ROUTE_LANG + '/:page?/:slug?'
export const ROUTE_ABOUT = ROUTE_LANG + '/about'
