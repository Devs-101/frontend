import React from 'react'
import { HomeStyled, HomeTitle } from './HomePage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'
import { EventCard } from '../../components/organisms'

const MOCKS = [
  {
    id: '1',
    imageUrl: '',
    eventName: 'El Evento',
    eventDescription:
      'Este es un evento muy bueno!!!!, Este es un evento muy bueno!!!!, Este es un evento muy bueno!!!!, Este es un evento muy bueno!!!!, Este es un evento muy bueno!!!!',
    attendeeCounter: '25',
    eventDate: '25 / 04 / 2020'
  }
]

export function HomePage() {
  return (
    <HomeTemplate>
      <HomeStyled>
        <HomeTitle>
          <h3>Your Events</h3>
          <Button>Add Event</Button>
        </HomeTitle>
        <main>
          {MOCKS.map(event => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              eventName={event.eventName}
              eventDescription={event.eventDescription}
              attendeeCounter={event.attendeeCounter}
              eventDate={event.eventDate}
            />
          ))}
        </main>
      </HomeStyled>
    </HomeTemplate>
  )
}
