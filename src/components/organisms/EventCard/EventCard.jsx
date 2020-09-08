import React from 'react'
import { useHistory } from 'react-router-dom'
import ConferencePlaceHolder from '../../../assets/images/ConferencePlaceHolder.jpg'
import {
  EventCardStyled,
  EventImage,
  EventTitle,
  EventDescription,
  EventFooter,
  EventAttendeeCounter,
  EventDate
} from './EventCard.styles'

export function EventCard({
  eventId,
  imageUrl,
  eventName,
  eventDescription,
  attendeeCounter,
  eventDate
}) {
  const { push } = useHistory()
  function handleEventCardClick() {
    push(`${eventId}/event-info`)
  }
  return (
    <EventCardStyled onClick={handleEventCardClick}>
      <EventImage>
        <img src={imageUrl || ConferencePlaceHolder} alt={eventName} />
      </EventImage>
      <EventTitle>{eventName}</EventTitle>
      <EventDescription>{eventDescription}</EventDescription>
      <EventFooter>
        <EventAttendeeCounter>{attendeeCounter}</EventAttendeeCounter>
        <EventDate>{eventDate}</EventDate>
      </EventFooter>
    </EventCardStyled>
  )
}
