import styled from '@emotion/styled'
import { Box } from 'pss-components'

export const FloatingBox = styled(Box)`
  position: fixed;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  max-width: 98%;
  max-width: calc(100% - 2rem);
  overflow: hidden;
`

FloatingBox.defaultProps = {
  top: '50%',
  tm: 'overlay'
}
