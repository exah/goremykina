import styled from 'react-emotion'

import {
  space,
  sizes,
  colors,
  flexPropStyles,
  flexItemPropStyles,
  utilityPropStyles
} from '@exah/prop-styles-system'

const Box = styled.div(
  space,
  sizes,
  colors,
  utilityPropStyles
)

const FlexBox = styled(Box)({ display: 'flex' }, flexPropStyles)
const FlexBoxItem = styled(Box)(flexItemPropStyles)

FlexBox.Item = FlexBoxItem

export { Box, FlexBox, FlexBoxItem }
