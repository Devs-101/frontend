import React from 'react'
import ConferencePlaceHolder from '../../../assets/images/ConferencePlaceHolder.jpg'
import {
  EventCardStyled,
  EventImage,
  EventTitle,
  EventDescription,
  EventFooter,
  EventAttendeeCounter,
  EventDate
} from './EventCard.styes'

export function EventCard({
  url,
  eventName,
  eventDescription,
  attendeeCounter,
  eventDate
}) {
  return (
    <EventCardStyled>
      <EventImage>
        <img src={url || ConferencePlaceHolder} alt="ConferencePlaceHolder" />
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
