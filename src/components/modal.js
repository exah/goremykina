import React from 'react'
import { Box, Button } from 'pss-components'
import { Floating } from './floating'
import { IconClose } from './icons'

const ModalContent = (props) => <Box p='1rem' {...props} />

export const Modal = ({ children, footer, onClose, ...rest }) => (
  <Floating {...rest}>
    <Button
      position='absolute'
      top='overlay'
      right='overlay'
      zIndex={1}
      onClick={onClose}
    >
      <IconClose />
    </Button>
    {children}
  </Floating>
)

Modal.Content = ModalContent
