import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Flipped } from 'react-flip-toolkit'
import { Box, Text, FlexBox } from 'pss-components'
import { withIntl } from '../hocs'
import { ROUTE_PICTURE } from '../constants'
import { AppLink } from '../containers'
import { PanZoom, IconClose } from '../components'

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

const vmax = (num) => (num * 100) + 'vmax'

const Img = styled('img')`
  position: absolute;
  z-index: 0;
  display: block;
  max-width: none;

  ${p => {
    const ratio = (p.width / p.height)

    return p.width > p.height ? css`
      top: 50%;
      left: 50%;
      margin-top: -50vmax;
      margin-left: -${vmax(ratio / 2)};
      width: ${vmax(ratio)};
      height: 100vmax;
    ` : css`
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

  componentDidMount () {
    if (this.state.isReady) return

    const pic = this.props.activePicture.zoomed
    const image = new window.Image(pic.width, pic.height)

    image.src = pic.url
    image.onload = () => this.setState({ isReady: true }, () => {
      document.body.removeChild(image)
    })

    // Firefox needs to actually insert image in DOM
    document.body.appendChild(image)
  }

  render () {
    const { intl, activePicture: pic } = this.props
    const { isReady, isAppeared } = this.state

    return (
      <Box tm='zoomed' ovh>
        {pic && pic.zoomed && (
          <>
            <Overlay ht wdM>
              <Text ht align='right' alignM='center'>
                <FlexBox column ht>
                  <FlexBox.Item>
                    <OverlayItem>
                      <AppLink path={ROUTE_PICTURE} data={pic} title={intl.t('ui.close')}>
                        <Box pd={2}>
                          <IconClose />
                        </Box>
                      </AppLink>
                    </OverlayItem>
                  </FlexBox.Item>
                  <FlexBox.Item mgt='auto' pdb={2}>
                    <OverlayItem>
                      <AppLink path={ROUTE_PICTURE} data={pic}>
                        <Text mgb>
                          {pic.name}
                        </Text>
                        <Text textStyle='caption'>
                          {pic.material}, {pic.size}
                        </Text>
                      </AppLink>
                    </OverlayItem>
                  </FlexBox.Item>
                </FlexBox>
              </Text>
            </Overlay>
            <PanZoom>
              <Flipped flipId={'pic-' + pic.id} onComplete={this.handleAppear}>
                <Img
                  src={isReady && isAppeared ? pic.zoomed.url : pic.original.url}
                  width={pic.zoomed.width}
                  height={pic.zoomed.height}
                  alt=''
                />
              </Flipped>
            </PanZoom>
          </>
        )}
      </Box>
    )
  }
}

export default withIntl(PictureZoomPage)
