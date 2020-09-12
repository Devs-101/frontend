import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HomeStyled, HomeTitle, Main } from './HomePage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'
import { EventCard, Modal, EventForm } from '../../components/organisms'
import { openModal } from '../../redux/slices/modals'

export function HomePage() {
  const {
    eventsIds,
    eventsById,
    eventsLoading,
    eventsError,
    organizationIdLoading,
    organizationIdError,
    modalIsOpen
  } = useSelector(state => {
    return {
      eventsIds: state.events.ids,
      eventsById: state.events.entities,
      eventsLoading: state.events.loading,
      eventsError: state.events.error,
      organizationIdLoading: state.users.loading,
      organizationIdError: state.users.error,
      modalIsOpen: state.modals.isOpen
    }
  })

  const dispatch = useDispatch()

  function handleOpenModal() {
    dispatch(openModal())
  }

  return (
    <HomeTemplate>
      <HomeStyled>
        <HomeTitle>
          <h3>Your Events</h3>
          <Button type="button" onClick={handleOpenModal}>
            Add Event
          </Button>
          <Modal isOpen={modalIsOpen}>
            <EventForm />
          </Modal>
        </HomeTitle>
        {eventsLoading || organizationIdLoading ? (
          <h1>Loading...</h1>
        ) : !!eventsError || organizationIdError ? (
          <h1>Error</h1>
        ) : (
          <Main>
            {eventsIds.map(eventId => {
              const event = eventsById[eventId]
              return (
                <EventCard
                  key={eventId}
                  eventId={eventId}
                  imageUrl={event.img}
                  eventName={event.name}
                  eventDescription={event.description}
                  attendeeCounter={event.attendeeCounter}
                  eventDate={event.eventDate}
                />
              )
            })}
          </Main>
        )}
      </HomeStyled>
    </HomeTemplate>
  )
}
