import React from 'react'
import { TitlePageStyled } from './TitlePage.styles'
import { Button } from '../../atoms'

export function TitlePage() {
  return (
    <TitlePageStyled>
      <h3>Your Events</h3>
      <Button>Add Event</Button>
    </TitlePageStyled>
  )
}
