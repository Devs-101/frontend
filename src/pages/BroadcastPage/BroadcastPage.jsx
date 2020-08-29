import React from 'react'
import { BroadcastPageStyled } from './BroadcastPage.styles'
import { MainTemplate } from '../../templates'
import { BroadcastCard } from '../../components/organisms'
import { TitlePage } from '../../components/molecules/TitlePage'

export function BroadcastPage() {
  return (
    <MainTemplate>
      <TitlePage title="Broadcast" button="Broadcast" />
      <BroadcastPageStyled>
        <BroadcastCard />
      </BroadcastPageStyled>
    </MainTemplate>
  )
}
