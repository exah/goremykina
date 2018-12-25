import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { mq } from 'pss'
import { Layout, Box, FlexBox, Text } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { Logo, Slideshow } from '../components'
import { AppLink, PictureDescription } from '../containers'
import { withIntl } from '../hocs'

import {
  ROUTE_PICTURE,
  ROUTE_PICTURE_ZOOM,
  ROUTE_ABOUT
} from '../constants'

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

  ${mq('sm')} {
    max-width: 100%;
  }
`

const isPictureUpdated = (prev, next) => (
  prev != null &&
  next != null &&
  prev.id !== next.id
)

class PicturePage extends Component {
  static defaultProps = {
    pictures: []
  }

  constructor (props) {
    super(props)

    const index = props.activePicture != null
      ? props.pictures.findIndex((p) => p.slug === props.activePicture.slug)
      : 0

    this.state = {
      index: index !== -1 ? index : 0
    }
  }

  handlePictureChange = ({ index }) => {
    this.setState((state, { pictures, history, intl }) => {
      if (state.index !== index) {
        const activePicture = pictures[index]

        history.replace(intl.link(ROUTE_PICTURE, activePicture))

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
      props.isLoading !== this.props.isLoading ||
      isPictureUpdated(props.activePicture, this.props.activePicture)
    )
  }

  render () {
    const { intl, isLoading, pictures, activePicture } = this.props
    const { index } = this.state

    const first = pictures[0]
    const prev = pictures[index - 1]
    const next = pictures[index + 1]
    const last = pictures[pictures.length - 1]

    return (
      <>
        {activePicture && (
          <Helmet>
            <title>{activePicture.name}</title>
            <link rel='canonical' href={intl.href(ROUTE_PICTURE, activePicture)} />
            <link rel='alternate' href={intl.href(ROUTE_PICTURE, activePicture)} hrefLang='x-default' />
            <link rel='alternate' href={intl.href(ROUTE_PICTURE, activePicture, intl.langAlt)} hrefLang={intl.langAlt} />
            {first && <link rel='first' href={intl.href(ROUTE_PICTURE, first)} />}
            {last && <link rel='last' href={intl.href(ROUTE_PICTURE, last)} />}
            {prev && <link rel='prev' href={intl.href(ROUTE_PICTURE, prev)} />}
            {next && <link rel='next' href={intl.href(ROUTE_PICTURE, next)} />}
          </Helmet>
        )}
        <Layout ovh>
          <Layout.Item as='header' pd={2}>
            <FlexBox alignItems={{ sm: 'center' }}>
              <FlexBox.Item mgr='auto' width={1 / 3} hideOn='md'>
                <AppLink path={ROUTE_ABOUT}>
                  <Text>{intl.t('nav.about')}</Text>
                </AppLink>
              </FlexBox.Item>
              <FlexBox.Item>
                <AppLink path={ROUTE_PICTURE} data={activePicture}>
                  <Logo title={intl.t('nav.home')} />
                </AppLink>
              </FlexBox.Item>
              <FlexBox.Item mgl='auto' width={1 / 3}>
                <AppLink path={ROUTE_PICTURE} data={activePicture} alternate>
                  <Text textAlign='right'>{intl.t('nav.lang')}</Text>
                </AppLink>
              </FlexBox.Item>
            </FlexBox>
          </Layout.Item>
          <Layout.Body as='main'>
            <Layout.Content position='relative'>
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
                    <Slideshow.Item key={slide.key} height='100%' pdx={2}>
                      <Box position='relative' height='100%'>
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
          <Layout.Item as='footer' pd={2}>
            <FlexBox justifyContent='space-between' alignItems='flex-end'>
              <FlexBox.Item hideOn='sm'>
                <AppLink path={ROUTE_ABOUT}>
                  <Text>{intl.t('nav.about')}</Text>
                </AppLink>
              </FlexBox.Item>
              {activePicture && (
                <FlexBox.Item mgx={{ sm: 'auto' }}>
                  <PictureDescription
                    isLoading={isLoading}
                    {...activePicture}
                  />
                </FlexBox.Item>
              )}
            </FlexBox>
          </Layout.Item>
        </Layout>
      </>
    )
  }
}

export default withIntl(PicturePage)
