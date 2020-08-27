import React from 'react'
import {
  BroadcastCardStyled,
  BroadcastCardText,
  BroadcastCardDate,
  BroadcastCardTitle
} from './BroadcastCard.styles'
import profile from '../../../assets/images/devs101.png'

export function BroadcastCard({ avatar, date, title, message }) {
  return (
    <BroadcastCardStyled>
      <figure>
        <img src={avatar || profile} alt="" />
      </figure>
      <BroadcastCardText>
        <BroadcastCardTitle>{title}</BroadcastCardTitle>
        <BroadcastCardDate>{date}</BroadcastCardDate>
        <p>{message}</p>
      </BroadcastCardText>
    </BroadcastCardStyled>
  )
}
