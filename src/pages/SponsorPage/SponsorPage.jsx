import React from 'react'
import { MainTemplate } from '../../templates'
import { SponsorCard, TitlePage } from '../../components/molecules'
import { SponsorPageStyled } from './SponsorPage.styles'

export function SponsorPage() {
  return (
    <MainTemplate>
      <TitlePage title="Sponsors" button="Add sponsor" />
      <SponsorPageStyled>
        <SponsorCard />
      </SponsorPageStyled>
    </MainTemplate>
  )
}
