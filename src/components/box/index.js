import styled from 'react-emotion'

import {
  helperProps,
  themeProps,
  marginProps,
  paddingProps,
  borderProps,
  flexProps,
  flexItemProps,
  sizesProps
} from '@exah/prop-styles-system'

const Box = styled.div(
  helperProps,
  themeProps,
  marginProps,
  paddingProps,
  borderProps,
  sizesProps
)

const FlexBox = styled(Box)({ display: 'flex' }, flexProps)
const FlexBoxItem = styled(Box)(flexItemProps)

FlexBox.Item = FlexBoxItem

export { Box, FlexBox, FlexBoxItem }
