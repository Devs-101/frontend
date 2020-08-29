import React from 'react'
import { MainTemplate } from '../../templates'
import { EventInfoStyled } from './EventInfoPage.styles'
import { TitlePage } from '../../components/molecules'

export function EventInfoPage() {
  return (
    <MainTemplate>
      <TitlePage title="Event Details" button="Save" />
      <EventInfoStyled>
        <h1>Event info</h1>
      </EventInfoStyled>
    </MainTemplate>
  )
}
