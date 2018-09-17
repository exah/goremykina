import { withData } from 'react-universal-data'
import { compose, withStateHandlers } from 'recompose'
import { getPicturs } from '../api'

const withPicturesData = withData(
  ({ lang }) => getPicturs({ lang }).then((res) => ({
    pictures: res.data
  })),
  (prev, next) => prev.lang !== next.lang
)

const picturesState = withStateHandlers(({ slug, pictures }) => {
  if (pictures == null) return {}

  return {
    activePicture: slug != null
      ? pictures.find((p) => p.slug === slug)
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
