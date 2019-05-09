import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { compose } from '@exah/utils'
import { Flipper } from 'react-flip-toolkit'
import { Box } from 'pss-components'
import { withIntl, withPicturesData } from '../hocs'
import AppRoutes from './app-routes'

class AppRoot extends PureComponent {
  static defaultProps = {
    match: { params: {} },
    activePicture: null,
    pictures: []
  }

  static getDerivedStateFromProps ({ pictures, match }) {
    if (match.params.slug == null) {
      return null
    }

    return {
      activePicture: pictures.find((p) => p.slug === match.params.slug)
    }
  }

  state = {
    activePicture: this.props.activePicture
  }

  render () {
    const { intl, match, isLoading, pictures } = this.props
    const { activePicture } = this.state
    const style = activePicture ? { backgroundColor: activePicture.color } : {}

    return (
      <Box tm height='100%' transition='background-color .5s' style={style}>
        <Helmet
          defaultTitle={intl.t('title').toString()}
          titleTemplate={'%s — ' + intl.t('title')}
        >
          <html lang={intl.lang} />
          <meta property='og:site_name' content={intl.t('title')} />
          <link rel='icon' sizes='192x192' href='/icon.png' />
          <link rel='apple-touch-icon' href='/apple-icon.png' />
          {activePicture && (
            <meta name='theme-color' content={activePicture.color} />
          )}
        </Helmet>
        <Box use={Flipper} flipKey={match.params.page} height='100%'>
          <AppRoutes
            pictures={pictures}
            activePicture={activePicture}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    )
  }
}

export default compose(
  withIntl,
  withPicturesData
)(AppRoot)
