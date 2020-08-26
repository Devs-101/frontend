import React from 'react'
import { HomeStyled, HomeTitle } from './HomePage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'

export function HomePage() {
  return (
    <HomeTemplate>
      <HomeStyled>
        <HomeTitle>
          <h3>Your Events</h3>
          <Button>Add Event</Button>
        </HomeTitle>
        <main>Proyects</main>
      </HomeStyled>
    </HomeTemplate>
  )
}
