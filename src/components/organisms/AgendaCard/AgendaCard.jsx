import React from 'react'
import {
  AgendaCardStyled,
  AgendaCardText,
  AgendaCardDate,
  AgendaCardTitle
} from './AgendaCard.styles'
import profile from '../../../assets/images/avatar.png'

export function AgendaCard({ avatar, date, title, description }) {
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
