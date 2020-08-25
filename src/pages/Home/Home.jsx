import React from 'react'
import { HomeStyled, HomeTitle } from './Home.styles'
import { Button } from '../../components/atoms/Button/Button'

export function Home() {
  return (
    <HomeStyled>
      <HomeTitle>
        <h3>Your Events</h3>
        <Button>Add Event</Button>
      </HomeTitle>
      <main>Proyects</main>
    </HomeStyled>
  )
}
