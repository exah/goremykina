import React from 'react'
import styled from 'react-emotion'
import { system } from 'pss'

const ModalContainer = styled('div')`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${system}
`

const Modal = ({ children, ...rest }) => (
  <ModalContainer bg='site-background' {...rest}>
    {children}
  </ModalContainer>
)

export {
  Modal,
  ModalContainer
}
