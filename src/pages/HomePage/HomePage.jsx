import React from 'react'
import { useSelector } from 'react-redux'
import { HomeStyled, HomeTitle } from './HomePage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'
import { EventCard } from '../../components/organisms'

export function HomePage() {
  const {
    eventsIds,
    eventsById,
    eventsLoading,
    eventsError,
    organizationIdLoading,
    organizationIdError
  } = useSelector(state => {
    return {
      eventsIds: state.events.ids,
      eventsById: state.events.entities,
      eventsLoading: state.events.loading,
      eventsError: state.events.error,
      organizationIdLoading: state.users.loading,
      organizationIdError: state.users.error
    }
  })

  return (
    <HomeTemplate>
      <HomeStyled>
        <HomeTitle>
          <h3>Your Events</h3>
          <Button>Add Event</Button>
        </HomeTitle>
        {eventsLoading || organizationIdLoading ? (
          <h1>Loading...</h1>
        ) : !!eventsError || organizationIdError ? (
          <h1>Error</h1>
        ) : (
          <main>
            {eventsIds.map(eventId => {
              const event = eventsById[eventId]
              return (
                <EventCard
                  key={eventId}
                  eventId={eventId}
                  imageUrl={event.imageUrl}
                  eventName={event.name}
                  eventDescription={event.description}
                  attendeeCounter={event.attendeeCounter}
                  eventDate={event.eventDate}
                />
              )
            })}
          </main>
        )}
      </HomeStyled>
    </HomeTemplate>
  )
}
