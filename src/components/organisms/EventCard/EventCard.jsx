import React from 'react'
import {
  EventCardStyled,
  EventCardImg,
  EventTitle,
  EventDescription,
  EventFooter,
  EventAttendeeCounter,
  EventDate
} from './EventCard.styes'

export function EventCard(
  url,
  eventName,
  eventDescription,
  attendeeCounter,
  eventDate
) {
  return (
    <EventCardStyled>
      <EventCardImg url={url}>
        <EventTitle>
          <h3>{eventName}</h3>
        </EventTitle>
      </EventCardImg>
      <EventDescription>
        <p>{eventDescription}</p>
      </EventDescription>
      <EventFooter>
        <EventAttendeeCounter>
          <p>{attendeeCounter}</p>
        </EventAttendeeCounter>
        <EventDate>
          <p>{eventDate}</p>
        </EventDate>
      </EventFooter>
    </EventCardStyled>
  )
}
