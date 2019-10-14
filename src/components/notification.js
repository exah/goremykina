import React from 'react'
import { Flex, Text, Button } from 'pss-components'
import { FloatingBox } from './floating-box'
import { IconClose } from './icons'

export const Notification = ({ children, onOpen, onClose, ...rest }) => (
  <FloatingBox
    p='overlay'
    top={{ md: '2rem' }}
    bottom={{ all: '0', md: 'auto' }}
    {...rest}
  >
    <Flex>
      <Button px='1rem' onClick={onOpen}>
        <Text variant='caption' whiteSpace='nowrap'>
          {children}
        </Text>
      </Button>
      <Button onClick={onClose}>
        <IconClose />
      </Button>
    </Flex>
  </FloatingBox>
)
