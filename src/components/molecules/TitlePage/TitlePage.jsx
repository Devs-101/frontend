import React from 'react'
import { TitlePageStyled } from './TitlePage.styles'
import { Button } from '../../atoms'

export function TitlePage({ title, button }) {
  return (
    <TitlePageStyled>
      <h3>{title}</h3>
      <Button>{button}</Button>
    </TitlePageStyled>
  )
}
