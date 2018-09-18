import { withData } from 'react-universal-data'
import { compose, withStateHandlers } from 'recompose'
import { getPicturs } from '../api'

const withPicturesData = withData(
  ({ match }) => getPicturs(match.params).then((res) => ({
    pictures: res.data
  })),
  (prev, next) => prev.match.params.lang !== next.match.params.lang
)

const picturesState = withStateHandlers(({ match, pictures }) => {
  if (pictures == null) return {}

  return {
    activePicture: match.params.slug != null
      ? pictures.find((p) => p.slug === match.params.slug)
      : pictures[0]
  }
}, {
  changeActivePicture: (state, props) => (activePicture) => {
    if (activePicture == null) return

    if (state.activePicture == null || state.activePicture.id !== activePicture.id) {
      return {
        activePicture
      }
    }

    return null
  }
})

const withPicturesDataState = compose(
  withPicturesData,
  picturesState
)

export {
  withPicturesData,
  withPicturesDataState
}
