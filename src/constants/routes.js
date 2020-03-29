import { SUPPORTED_LANGS } from './langs'

export const ROUTE_LANG = `/:lang(${SUPPORTED_LANGS.join('|')})`
export const ROUTE_MAIN = ROUTE_LANG + '/picture/:slug?'
export const ROUTE_PICTURE = ROUTE_LANG + '/zoom/:slug'
export const ROUTE_PAGE = ROUTE_LANG + '/:page?/:slug?'
export const ROUTE_ABOUT = ROUTE_LANG + '/about'
