import React from 'react'
import { ButtonStyled } from './Button.styles'

export function Button({ children, onClick, type = 'submit' }) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
