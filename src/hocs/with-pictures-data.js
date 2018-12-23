import { withData } from 'react-universal-data'
import { getPicturs } from '../api'

const withPicturesData = withData(
  ({ match }) => getPicturs(match.params).then((res) => ({
    pictures: res.data,
    activePicture: match.params.slug == null
      ? res.data[0]
      : res.data.find((p) => p.slug === match.params.slug)
  })),
  (prev, next) => prev.match.params.lang !== next.match.params.lang
)

export {
  withPicturesData
}
