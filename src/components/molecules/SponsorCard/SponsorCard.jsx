import React from 'react'
import { SponsorCartStyled } from './SponsorCart.styles'
import sponsorImage from '../../../assets/images/sponsor.png'

export function SponsorCard({ url, name, web }) {
  return (
    <SponsorCartStyled>
      <figure>
        <img src={url || sponsorImage} alt="sponsor" />
      </figure>
      <h2>{name}</h2>
      <p>{web}</p>
    </SponsorCartStyled>
  )
}
