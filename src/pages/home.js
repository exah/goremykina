import React from 'react'
import styled from 'react-emotion'
import { Layout, FlexBox, Text } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_HOME, ROUTE_ABOUT } from '../constants'
import { withIntl } from '../hocs'
import { Logo, Slideshow } from '../components'
import { AppLink } from '../containers'

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
  langAlt,
  isLoading,
  children,
  hideActivePicture,
  pictures = [],
  onPictureChange,
  activePicture,
  activePictureIndex
}) => (
  <Layout bg='site-background' ovh>
    <Layout.Item comp='header' pd={2}>
      <FlexBox>
        <FlexBox.Item>
          <AppLink path={ROUTE_HOME}>
            <Logo title={_t('nav.home')} />
          </AppLink>
        </FlexBox.Item>
        <FlexBox.Item mgl='auto'>
          <AppLink path={ROUTE_HOME} lang={langAlt}>
            <Text>{_t('nav.lang')}</Text>
          </AppLink>
        </FlexBox.Item>
      </FlexBox>
    </Layout.Item>
    <Layout.Body comp='main'>
      <Layout.Content>
        <Slideshow
          currentViewIndex={activePictureIndex}
          onChange={onPictureChange}
        >
          {pictures.map((pic, index) => (
            <Slideshow.Item key={pic.id} position='relative' ht>
              {activePictureIndex === index ? !hideActivePicture && (
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
    </Layout.Body>
    <Layout.Item comp='footer' pd={2}>
      <FlexBox justify align='flex-end'>
        <FlexBox.Item>
          <AppLink path={ROUTE_ABOUT}>
            <Text>{_t('nav.about')}</Text>
          </AppLink>
        </FlexBox.Item>
        {activePicture && (
          <FlexBox.Item>
            <Text align='right'>
              <Text mgb>
                {isLoading ? _t('label.loading') : activePicture.name}
              </Text>
              <Text textStyle='caption'>
                {isLoading ? <>&nbsp;</> : activePicture.description}
              </Text>
            </Text>
          </FlexBox.Item>
        )}
      </FlexBox>
    </Layout.Item>
  </Layout>
)

export default withIntl(Home)
