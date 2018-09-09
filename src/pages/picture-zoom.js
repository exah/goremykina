import React from 'react'
import styled from 'react-emotion'
import { Flipped } from 'react-flip-toolkit'
import { Box } from 'pss-components'
import { ROUTE_PICTURE } from '../constants'
import { AppLink } from '../containers'
import { PanZoom } from '../components'

const toPercent = (num) => `${(num * 100)}%`

const ImgBox = styled(Box)`
  width: ${p => p.width >= p.height ? toPercent(p.width / p.height) : '100%'};
`

const Img = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
`

const PictureZoomPage = ({ activePicture: pic }) => (
  <Box ovh ht>
    {pic && (
      <>
        <AppLink path={ROUTE_PICTURE} data={pic}>
          Close
        </AppLink>
        <PanZoom>
          <Flipped flipId={'pic-' + pic.id}>
            <ImgBox ratio={pic.width / pic.height} width={pic.width}>
              <Img
                src={pic.url}
                width={pic.width}
                height={pic.height}
              />
            </ImgBox>
          </Flipped>
        </PanZoom>
      </>
    )}
  </Box>
)

export default PictureZoomPage
