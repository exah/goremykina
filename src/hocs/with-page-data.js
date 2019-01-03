import { withData } from 'react-universal-data'
import { getPage } from '../api'

const withPageData = (slug) =>
  withData(
    ({ match }) =>
      getPage({ slug, ...match.params }).then((res) => ({
        status: res.status,
        ...res.data
      })),
    (prev, next) => prev.match.params.lang !== next.match.params.lang
  )

export { withPageData }
