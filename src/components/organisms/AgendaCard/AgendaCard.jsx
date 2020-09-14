import React from 'react'
import {
  AgendaCardStyled,
  AgendaCardText,
  AgendaCardDate,
  AgendaCardTitle
} from './AgendaCard.styles'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../redux/slices/modals'
import profile from '../../../assets/images/avatar.png'
import { selectedTalkAsync } from '../../../redux/slices/talks/'

export function AgendaCard({ id, avatar, date, title, description }) {
  const dispatch = useDispatch()

  async function handleClick() {
    await dispatch(selectedTalkAsync(id))
    dispatch(openModal())
  }

  const initDate = new Date(date).toLocaleDateString()

  return (
    <AgendaCardStyled onClick={handleClick}>
      <figure>
        <img src={avatar || profile} alt={title} />
      </figure>
      <AgendaCardText>
        <AgendaCardTitle>{title}</AgendaCardTitle>
        <AgendaCardDate>{initDate}</AgendaCardDate>
        <p>{description}</p>
      </AgendaCardText>
    </AgendaCardStyled>
  )
}
