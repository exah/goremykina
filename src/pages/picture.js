import React from 'react'
import styled from 'react-emotion'
import { Layout, Box, FlexBox, Text } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_PICTURE, ROUTE_PICTURE_ZOOM, ROUTE_ABOUT } from '../constants'
import { withIntl } from '../hocs'
import { Logo, Slideshow } from '../components'
import { AppLink } from '../containers'

const Img = styled('img')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 85%;
  max-width: 90%;
  width: auto;
  height: auto;
  margin: auto;

  @media ${(props) => props.theme.media.M} {
    max-width: 100%;
  }
`

const PicturePage = ({
  _t,
  langAlt,
  isLoading,
  children,
  pictures = [],
  onPictureChange,
  activePicture,
  activePictureIndex
}) => (
  <Layout ovh>
    <Layout.Item comp='header' pd={2}>
      <FlexBox alignM='center'>
        <FlexBox.Item hideL mgr='auto'>
          <AppLink path={ROUTE_ABOUT}>
            <Text>{_t('nav.about')}</Text>
          </AppLink>
        </FlexBox.Item>
        <FlexBox.Item>
          <AppLink path={ROUTE_PICTURE}>
            <Logo title={_t('nav.home')} />
          </AppLink>
        </FlexBox.Item>
        <FlexBox.Item mgl='auto'>
          <AppLink path={ROUTE_PICTURE} lang={langAlt}>
            <Text>{_t('nav.lang')}</Text>
          </AppLink>
        </FlexBox.Item>
      </FlexBox>
    </Layout.Item>
    <Layout.Body comp='main'>
      <Layout.Content>
        <Slideshow
          defaultViewIndex={activePictureIndex}
          slideCount={pictures.length}
          onChange={onPictureChange}
        >
          {({ index, key }) => {
            const pic = pictures[index]

            if (pic == null) {
              return (
                <Slideshow.Item key={key} />
              )
            }

            return (
              <Slideshow.Item key={key} ht pdx={2}>
                <Box position='relative' ht>
                  <AppLink
                    path={ROUTE_PICTURE_ZOOM}
                    data={pic}
                    disable={!pic.zoomed}
                    style={{ cursor: 'zoom-in' }}
                  >
                    <Flipped flipId={'pic-' + pic.id}>
                      <Img
                        src={pic.original.url}
                        width={pic.original.width}
                        height={pic.original.height}
                        alt=''
                      />
                    </Flipped>
                  </AppLink>
                </Box>
              </Slideshow.Item>
            )
          }}
        </Slideshow>
      </Layout.Content>
    </Layout.Body>
    <Layout.Item comp='footer' pd={2}>
      <FlexBox justify align='flex-end'>
        <FlexBox.Item hideM>
          <AppLink path={ROUTE_ABOUT}>
            <Text>{_t('nav.about')}</Text>
          </AppLink>
        </FlexBox.Item>
        {activePicture && (
          <FlexBox.Item mgxM='auto'>
            <Text align='right' alignM='center'>
              <Text mgb>
                {isLoading ? <>&nbsp;</> : activePicture.name}
              </Text>
              <Text textStyle='caption'>
                {isLoading ? _t('ui.loading') : (
                  <>{activePicture.material}, {activePicture.size}</>
                )}
              </Text>
            </Text>
          </FlexBox.Item>
        )}
      </FlexBox>
    </Layout.Item>
  </Layout>
)

export default withIntl(PicturePage)
