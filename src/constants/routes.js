import { SUPPORTED_LANGS } from './langs'

const ROUTE_LANG = `/:lang(${SUPPORTED_LANGS.join('|')})`
const ROUTE_PICTURE = ROUTE_LANG + '/picture/:slug?'
const ROUTE_PICTURE_ZOOM = ROUTE_LANG + '/zoom/:slug'
const ROUTE_PAGE = ROUTE_LANG + '/:page?/:slug?'
const ROUTE_ABOUT = ROUTE_LANG + '/about'

export {
  ROUTE_LANG,
  ROUTE_PICTURE,
  ROUTE_PICTURE_ZOOM,
  ROUTE_PAGE,
  ROUTE_ABOUT
}
