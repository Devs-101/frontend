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

export function EventCard(url, eventName) {
  return (
    <EventCardStyled>
      <EventCardImg url={url}>
        <EventTitle>
          <h3>Aqui va el eventName</h3>
        </EventTitle>
      </EventCardImg>
      <EventDescription>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem.
        </p>
      </EventDescription>
      <EventFooter>
        <EventAttendeeCounter>
          <p>25</p>
        </EventAttendeeCounter>
        <EventDate>
          <p>28 / 08 / 2020</p>
        </EventDate>
      </EventFooter>
    </EventCardStyled>
  )
}
