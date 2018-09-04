import { SUPPORTED_LANGS } from './langs'

export const ROUTE_LANG = `/:lang(${SUPPORTED_LANGS.join('|')})`
export const ROUTE_HOME = ROUTE_LANG + '/(picture/:pictureName|about)?'
export const ROUTE_PAGE = ROUTE_LANG + '/:page?'
export const ROUTE_ABOUT = ROUTE_LANG + '/about'
