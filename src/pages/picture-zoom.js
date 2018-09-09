import React from 'react'
import styled from 'react-emotion'
import { Flipped } from 'react-flip-toolkit'
import { Box } from 'pss-components'
import { ROUTE_PICTURE } from '../constants'
import { AppLink } from '../containers'

const Img = styled('img')`
  display: block;
  width: ${props => props.width > props.height ? 'auto' : '100%'};
  height: ${props => props.width >= props.height ? '100%' : 'auto'};
  max-width: none;
`

const PictureZoomPage = ({ activePicture: pic }) => (
  <Box ovs ovtouch ht>
    {pic && (
      <AppLink path={ROUTE_PICTURE} data={pic}>
        <Flipped flipId={'pic-' + pic.id}>
          <Img
            src={pic.url}
            width={pic.width}
            height={pic.height}
          />
        </Flipped>
      </AppLink>
    )}
  </Box>
)

export default PictureZoomPage
