import React from 'react'
import { BroadcastPageStyled } from './BroadcastPage.styles'
import { MainTemplate } from '../../templates'
import { BroadcastCard } from '../../components/organisms'

export function BroadcastPage() {
  return (
    <MainTemplate title="Broadcast" button="Add message">
      <BroadcastPageStyled>
        <BroadcastCard />
      </BroadcastPageStyled>
    </MainTemplate>
  )
}
