import React from 'react'
import { SponsorCartStyled, SponsorCartText } from './SponsorCart.styles'
import sponsorImage from '../../../assets/images/sponsor.png'

export function SponsorCard({ logoUrl, name, webSiteUrl }) {
  return (
    <SponsorCartStyled>
      <figure>
        <img src={logoUrl || sponsorImage} alt={name} />
      </figure>
      <SponsorCartText>
        <h2>{name}</h2>
        <p>{webSiteUrl}</p>
      </SponsorCartText>
    </SponsorCartStyled>
  )
}
