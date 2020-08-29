import React from 'react'
import {
  BroadcastCardStyled,
  BroadcastCardText,
  BroadcastCardDate,
  BroadcastCardTitle
} from './BroadcastCard.styles'
import { Icon } from '../../atoms'

export function BroadcastCard({ date, title, message }) {
  return (
    <BroadcastCardStyled>
      <Icon className="fas fa-envelope" size={30} />
      <BroadcastCardText>
        <BroadcastCardTitle>{title}</BroadcastCardTitle>
        <BroadcastCardDate>{date}</BroadcastCardDate>
        <p>{message}</p>
      </BroadcastCardText>
    </BroadcastCardStyled>
  )
}
