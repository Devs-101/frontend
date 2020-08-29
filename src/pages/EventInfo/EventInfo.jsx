import React from 'react'
import { MainTemplate } from '../../templates'
import { EventInfoStyled } from './EventInfo.styles'

export function EventInfo() {
  return (
    <MainTemplate title="Event Details" button="Save">
      <EventInfoStyled>
        <h1>Event info</h1>
      </EventInfoStyled>
    </MainTemplate>
  )
}
