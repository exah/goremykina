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
    isAppeared: this.props.history.action === 'POP'
  }

  handleAppear = () => {
    this.setState({
      isAppeared: true
    })
  }

  render () {
    const { _t, activePicture: pic } = this.props
    const { isAppeared } = this.state

    return (
      <Box tm='zoomed' ovh>
        {pic && pic.zoomed && (
          <>
            <Overlay ht wdM>
              <Text ht pd={2} align='right' alignM='center'>
                <FlexBox column ht>
                  <FlexBox.Item>
                    <OverlayItem>
                      <AppLink path={ROUTE_PICTURE} data={pic} title={_t('ui.close')}>
                        <IconClose />
                      </AppLink>
                    </OverlayItem>
                  </FlexBox.Item>
                  <FlexBox.Item mgt='auto'>
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
                  src={isAppeared ? pic.zoomed.url : pic.original.url}
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
