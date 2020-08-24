import React from 'react'
import { AgendaCardStyled, AgendaCardText } from './AgendaCard.styles'
import profile from '../../../assets/images/avatar.png'

export function AgendaCard({ avatar, date, title, description }) {
  return (
    <AgendaCardStyled>
      <figure>
        <img src={avatar || profile} alt="" />
      </figure>
      <AgendaCardText>
        <h3>{title}</h3>
        <h3>{date}</h3>
        <p>{description}</p>
      </AgendaCardText>
    </AgendaCardStyled>
  )
}
