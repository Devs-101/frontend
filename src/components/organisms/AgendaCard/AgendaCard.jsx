import React from 'react'
import {
  AgendaCardStyled,
  AgendaCardText,
  AgendaCardDate,
  AgendaCardTitle
} from './AgendaCard.styles'
import profile from '../../../assets/images/avatar.png'

export function AgendaCard({
  avatar,
  date = '28 / 08/ 20 - 10:00 am',
  title = 'Keynote',
  description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum'
}) {
  return (
    <AgendaCardStyled>
      <figure>
        <img src={avatar || profile} alt="" />
      </figure>
      <AgendaCardText>
        <AgendaCardTitle>{title}</AgendaCardTitle>
        <AgendaCardDate>{date}</AgendaCardDate>
        <p>{description}</p>
      </AgendaCardText>
    </AgendaCardStyled>
  )
}
