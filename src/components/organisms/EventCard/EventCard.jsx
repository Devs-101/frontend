import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ConferencePlaceHolder from '../../../assets/images/ConferencePlaceHolder.jpg'
import { selectedEventAsync } from '../../../redux/slices/events'
import {
  EventCardStyled,
  EventImage,
  EventTitle,
  EventDescription,
  EventFooter,
  EventAttendeeCounter,
  EventDate,
  EventLaunched
} from './EventCard.styles'

export function EventCard({
  eventId,
  imageUrl,
  eventName,
  eventDescription,
  attendeeCounter,
  eventDate,
  launched
}) {
  const dispatch = useDispatch()

  const { push } = useHistory()
  function handleEventCardClick() {
    dispatch(selectedEventAsync(eventId))
    push(`${eventId}/event-info`)
  }

  const initDate = new Date(eventDate).toLocaleDateString()

  return (
    <EventCardStyled onClick={handleEventCardClick}>
      <EventImage>
        <img src={imageUrl || ConferencePlaceHolder} alt={eventName} />
      </EventImage>
      <EventTitle>{eventName}</EventTitle>
      <EventDescription>{eventDescription}</EventDescription>
      <EventFooter>
        <EventAttendeeCounter>{attendeeCounter}</EventAttendeeCounter>
        <EventDate>Inicio: {initDate}</EventDate>
      </EventFooter>
      <EventLaunched isLaunched={launched}>
        {launched ? 'Launched' : 'No Launched'}
      </EventLaunched>
    </EventCardStyled>
  )
}
