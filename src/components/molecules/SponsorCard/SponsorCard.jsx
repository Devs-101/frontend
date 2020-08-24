import React from 'react'
import { SponsorCartStyled, SponsorCartText } from './SponsorCart.styles'
import sponsorImage from '../../../assets/images/sponsor.png'

export function SponsorCard({
  url,
  name = 'Sponsor',
  web = 'www.sponsor.com'
}) {
  return (
    <SponsorCartStyled>
      <figure>
        <img src={url || sponsorImage} alt="sponsor" />
      </figure>
      <SponsorCartText>
        <h2>{name}</h2>
        <p>{web}</p>
      </SponsorCartText>
    </SponsorCartStyled>
  )
}
