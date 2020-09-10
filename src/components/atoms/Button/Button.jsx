import React from 'react'
import { ButtonStyled } from './Button.styles'

export function Button({ children, onClick, type = 'submit', className }) {
  return (
    <ButtonStyled className={className} type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
