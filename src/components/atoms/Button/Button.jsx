import React from 'react'
import { ButtonStyled } from './Button.styles'

export function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
