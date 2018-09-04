import React from 'react'
import styled from 'react-emotion'
import { Layout } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { withIntl } from '../hocs'
import { Slideshow } from '../components'

const Picture = styled('img')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 75%;
  max-width: 75%;
  width: auto;
  height: auto;
  margin: auto;
`

const Home = ({
  _t,
  isLoading,
  children,
  isAboutPageOpen,
  pictures = [],
  onPictureChange,
  activePictureIndex
}) => (
  <Layout.Content wd>
    <Slideshow
      currentViewIndex={activePictureIndex}
      onChange={onPictureChange}
      equalHeight='100%' ht wd
    >
      {pictures.map((pic, index) => (
        <Slideshow.Item key={pic.id} position='relative' ht>
          {activePictureIndex === index ? !isAboutPageOpen && (
            <Flipped flipId={'pic-' + pic.id}>
              <Picture
                src={pic.url}
                width={pic.width}
                height={pic.height}
                alt=''
              />
            </Flipped>
          ) : (
            <Picture
              src={pic.url}
              width={pic.width}
              height={pic.height}
              alt=''
            />
          )}
        </Slideshow.Item>
      ))}
    </Slideshow>
  </Layout.Content>
)

export default withIntl(Home)
