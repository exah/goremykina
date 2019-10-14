import React from 'react'
import { Box, Button } from 'pss-components'
import { FloatingBox } from './floating-box'
import { IconClose } from './icons'

const ModalContent = (props) => <Box p='1rem' {...props} />

export const Modal = ({ children, footer, onClose, ...rest }) => (
  <FloatingBox {...rest}>
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
  </FloatingBox>
)

Modal.Content = ModalContent
