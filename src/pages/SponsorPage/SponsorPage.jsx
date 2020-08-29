import React from 'react'
import { MainTemplate } from '../../templates'
import { SponsorCard } from '../../components/molecules'
import { SponsorPageStyled } from './SponsorPage.styles'

export function SponsorPage() {
  return (
    <MainTemplate title="Sponsors" button="Add sponsor">
      <SponsorPageStyled>
        <SponsorCard />
      </SponsorPageStyled>
    </MainTemplate>
  )
}
