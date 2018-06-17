import React from 'react'
import Macro from 'macro-components'
import styled from 'react-emotion'
import { flexItemProps } from '@exah/prop-styles-system'
import { Box, FlexBox, FlexBoxItem } from '../box'

const LayoutContent = styled(Box)(
  { flexGrow: 1, flexShrink: 0, flexBasis: 'auto' },
  flexItemProps
)

const createLayout = Macro({
  Header: FlexBoxItem.withComponent('header'),
  Content: LayoutContent.withComponent('main'),
  Footer: FlexBoxItem.withComponent('footer')
})

const Layout = createLayout(({
  Header,
  Content,
  Footer
}, { children, ...rest }) => (
  <FlexBox column minHt pd bg='site-background' {...rest}>
    {Header}
    {Content}
    {Footer}
  </FlexBox>
))

export {
  Layout,
  FlexBoxItem as LayoutItem,
  LayoutContent
}
