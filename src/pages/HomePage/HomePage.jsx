import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEventsAsync } from '../../redux/slices/events'
import { HomeStyled, HomeTitle } from './HomePage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'
import { EventCard } from '../../components/organisms'

export function HomePage() {
  const dispatch = useDispatch()
  const {
    eventsIds,
    eventsById,
    eventsLoading,
    eventsError,
    organizationId,
    organizationIdLoading,
    organizationIdError
  } = useSelector(state => {
    return {
      eventsIds: state.events.ids,
      eventsById: state.events.entities,
      eventsLoading: state.events.loading,
      eventsError: state.events.error,
      organizationId: state.users.organizationInfo.id,
      organizationIdLoading: state.users.loading,
      organizationIdError: state.users.error
    }
  })

  useEffect(() => {
    dispatch(getAllEventsAsync(organizationId))
  }, [organizationId])

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
