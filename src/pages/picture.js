import React, { Component } from 'react'
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

const isPictureUpdated = (prev, next) => (
  prev != null &&
  next != null &&
  prev.id !== next.id
)

class PicturePage extends Component {
  constructor (props) {
    super(props)

    const index = props.pictures.findIndex((p) => p.slug === props.activePicture.slug)

    this.state = {
      index: index !== -1 ? index : 0
    }
  }

  handlePictureChange = ({ index }) => {
    this.setState((state, props) => {
      if (state.index !== index) {
        const activePicture = props.pictures[index]

        props.history.replace(props._link(ROUTE_PICTURE, activePicture))
        props.onPictureChange(activePicture)

        return {
          index
        }
      }

      return null
    })
  }

  shouldComponentUpdate (props, state) {
    return (
      props.lang !== this.props.lang ||
      isPictureUpdated(props.activePicture, this.props.activePicture)
    )
  }

  render () {
    const { _t, langAlt, isLoading, pictures, activePicture } = this.props
    const { index } = this.state

    return (
      <Layout ovh>
        <Layout.Item comp='header' pd={2}>
          <FlexBox alignM='center'>
            <FlexBox.Item hideL mgr='auto'>
              <AppLink path={ROUTE_ABOUT}>
                <Text>{_t('nav.about')}</Text>
              </AppLink>
            </FlexBox.Item>
            <FlexBox.Item>
              <AppLink path={ROUTE_PICTURE} data={activePicture}>
                <Logo title={_t('nav.home')} />
              </AppLink>
            </FlexBox.Item>
            <FlexBox.Item mgl='auto'>
              <AppLink path={ROUTE_PICTURE} lang={langAlt} data={activePicture}>
                <Text>{_t('nav.lang')}</Text>
              </AppLink>
            </FlexBox.Item>
          </FlexBox>
        </Layout.Item>
        <Layout.Body comp='main'>
          <Layout.Content>
            <Slideshow
              defaultIndex={index}
              slideCount={pictures.length}
              onChange={this.handlePictureChange}
            >
              {(slide) => {
                const pic = pictures[slide.index]

                if (pic == null) {
                  return (
                    <Slideshow.Item key={slide.key} />
                  )
                }

                return (
                  <Slideshow.Item key={slide.key} ht pdx={2}>
                    <Box position='relative' ht>
                      <AppLink
                        path={ROUTE_PICTURE_ZOOM}
                        data={pic}
                        disable={!pic.zoomed}
                        cursor={pic.zoomed && 'zoom-in'}
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
  }
}

export default withIntl(PicturePage)
