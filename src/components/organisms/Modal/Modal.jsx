import React from 'react'
import ReactDOM from 'react-dom'
import { Overlay } from './Modal.styles'

export function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <Overlay>{children}</Overlay>,
    document.getElementById('modal')
  )
}
