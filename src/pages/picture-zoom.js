import React from 'react'
import styled from 'react-emotion'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_PICTURE } from '../constants'
import { AppLink } from '../containers'
import { PanZoom, Modal } from '../components'

const Img = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
`

const PictureZoomPage = ({ activePicture: pic }) => (
  <Modal tm='zoomed' ovh>
    {pic && (
      <>
        <AppLink path={ROUTE_PICTURE} data={pic}>
          Close
        </AppLink>
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

export default PictureZoomPage
