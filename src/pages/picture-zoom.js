import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Flipped } from 'react-flip-toolkit'
import { withIntl } from '../hocs'
import { ROUTE_PICTURE } from '../constants'
import { PictureDescription } from '../containers'
import {
  Box,
  Text,
  Flex,
  Image,
  Pan,
  IconClose,
  RouteLink
} from '../components'

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  pointer-events: none;
`

// Restore pointer-events inside
const OverlayItem = styled('span')`
  pointer-events: auto;
`

const vmax = (num) => num * 100 + 'vmax'

const ZoomedImage = styled(Image)`
  position: absolute;
  z-index: 0;
  max-width: none;

  ${(p) => {
    const ratio = p.width / p.height

    return p.width > p.height
      ? css`
          top: 50%;
          left: 50%;
          margin-top: -50vmax;
          margin-left: -${vmax(ratio / 2)};
          width: ${vmax(ratio)};
          height: 100vmax;
        `
      : css`
          top: 50%;
          left: 50%;
          margin-top: -${vmax(1 / ratio / 2)};
          margin-left: -50vmax;
          width: 100vmax;
          height: ${vmax(1 / ratio)};
        `
  }}
`

class PictureZoomPage extends Component {
  state = {
    isAppeared: this.props.history.action === 'POP',
    isReady: this.props.history.action === 'POP'
  }

  handleAppear = () => {
    this.setState({
      isAppeared: true
    })
  }

  componentDidMount() {
    if (this.state.isReady) return

    const pic = this.props.activePicture.zoomed
    const image = new window.Image(pic.width, pic.height)

    image.src = pic.url
    image.onload = () =>
      this.setState({ isReady: true }, () => {
        document.body.removeChild(image)
      })

    // Firefox needs to actually insert image in DOM
    document.body.appendChild(image)
  }

  render() {
    const { intl, activePicture: pic } = this.props
    const { isReady, isAppeared } = this.state

    return (
      <>
        {pic && (
          <Helmet>
            <title>{pic.name}</title>
            <link rel='canonical' href={intl.href(ROUTE_PICTURE, pic)} />
          </Helmet>
        )}
        <Box tm='zoomed' overflow='hidden'>
          {pic && pic.zoomed && (
            <>
              <Overlay width={{ sm: '100%' }} height='100%'>
                <Text textAlign={{ all: 'right', sm: 'center' }} height='100%'>
                  <Flex flexDirection='column' height='100%'>
                    <Box>
                      <OverlayItem>
                        <RouteLink
                          path={ROUTE_PICTURE}
                          data={pic}
                          title={intl.t('ui.close')}
                        >
                          <Box p={2}>
                            <IconClose ml='auto' />
                          </Box>
                        </RouteLink>
                      </OverlayItem>
                    </Box>
                    <Box mt='auto' p={2}>
                      <OverlayItem>
                        <RouteLink path={ROUTE_PICTURE} data={pic}>
                          <PictureDescription {...pic} />
                        </RouteLink>
                      </OverlayItem>
                    </Box>
                  </Flex>
                </Text>
              </Overlay>
              <Pan>
                <Flipped
                  flipId={'pic-' + pic.id}
                  onComplete={this.handleAppear}
                >
                  <ZoomedImage
                    src={
                      isReady && isAppeared ? pic.zoomed.url : pic.original.url
                    }
                    width={pic.zoomed.width}
                    height={pic.zoomed.height}
                    alt=''
                  />
                </Flipped>
              </Pan>
            </>
          )}
        </Box>
      </>
    )
  }
}

export default withIntl(PictureZoomPage)
