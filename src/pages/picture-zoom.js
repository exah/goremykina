import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Flipped } from 'react-flip-toolkit'
import { Box, Text, FlexBox } from 'pss-components'
import { withIntl } from '../hocs'
import { ROUTE_PICTURE } from '../constants'
import { AppLink } from '../containers'
import { PanZoom, Modal, IconClose } from '../components'

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  pointer-events: none;
`

const enablePointerEvents = css`
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
      margin-top: -50vmax;
      left: 50%;
      margin-left: -${vmax(ratio / 2)};
      width: ${vmax(ratio)};
      height: 100vmax;
    ` : css`
      top: 50%;
      margin-top: -${vmax(1 / ratio / 2)};
      width: 100vmax;
      height: ${vmax(1 / ratio)};
    `
  }}
`

const PictureZoomPage = ({ _t, activePicture: pic }) => (
  <Modal tm='zoomed' ovh>
    {pic && (
      <>
        <Overlay ht wdM>
          <Text ht pd={2} align='right' alignM='center'>
            <FlexBox column ht>
              <FlexBox.Item>
                <AppLink
                  title={_t('ui.close')}
                  className={enablePointerEvents}
                  path={ROUTE_PICTURE}
                  data={pic}
                >
                  <IconClose />
                </AppLink>
              </FlexBox.Item>
              <FlexBox.Item mgt='auto'>
                <AppLink
                  className={enablePointerEvents}
                  path={ROUTE_PICTURE}
                  data={pic}
                >
                  <Text mgb>
                    {pic.name}
                  </Text>
                  <Text textStyle='caption'>
                    {pic.description}
                  </Text>
                </AppLink>
              </FlexBox.Item>
            </FlexBox>
          </Text>
        </Overlay>
        <PanZoom>
          <Flipped flipId={'pic-' + pic.id}>
            <Img
              src={pic.url}
              width={pic.width}
              height={pic.height}
            />
          </Flipped>
        </PanZoom>
      </>
    )}
  </Modal>
)

export default withIntl(PictureZoomPage)
