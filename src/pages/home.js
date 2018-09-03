import React from 'react'
import styled from 'react-emotion'
import { Layout, Text } from 'pss-components'
import { withIntl } from '../hocs'
import { Slideshow } from '../components'

const Picture = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-height: 75%;
  max-width: 75%;
  width: auto;
  height: auto;
`

const Home = ({
  _t,
  isLoading,
  children,
  pictures = [],
  onPictureChange
}) => (
  isLoading ? (
    <Text mg='auto'>
      {_t('label.loading')}
    </Text>
  ) : (
    <Layout.Content wd>
      <Slideshow equalHeight='100%' onChange={onPictureChange} ht wd>
        {pictures.map((pic) => (
          <Slideshow.Item key={pic.id} position='relative' ht>
            <Picture
              src={pic.url}
              width={pic.width}
              height={pic.height}
              alt=''
            />
          </Slideshow.Item>
        ))}
      </Slideshow>
    </Layout.Content>
  )
)

export default withIntl(Home)
