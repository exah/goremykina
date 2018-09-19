import { withData } from 'react-universal-data'
import { compose, withPropsOnChange } from 'recompose'
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

const activePictureProps = withPropsOnChange(
  (prev, next) => next.match.params.slug != null,
  ({ match, pictures = [], activePicture }) => ({
    activePicture: match.params.slug == null
      ? activePicture
      : pictures.find((p) => p.slug === match.params.slug)
  })
)

const withPicturesDataState = compose(
  withPicturesData,
  activePictureProps
)

export {
  withPicturesData,
  withPicturesDataState
}
