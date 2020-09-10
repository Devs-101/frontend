import React from 'react'
import { SponsorCardStyled, SponsorCardText } from './SponsorCard.styles'
import sponsorImage from '../../../assets/images/sponsor.png'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../redux/slices/modals'
import { selectedSponsorAsync } from '../../../redux/slices/sponsors'

export function SponsorCard({ id, logoUrl, name, webSiteUrl }) {
  const dispatch = useDispatch()

  async function handleClick() {
    await dispatch(selectedSponsorAsync(id))
    dispatch(openModal())
  }

  return (
    <SponsorCardStyled onClick={handleClick}>
      <figure>
        <img src={logoUrl || sponsorImage} alt={name} />
      </figure>
      <SponsorCardText>
        <h2>{name}</h2>
        <p>{webSiteUrl}</p>
      </SponsorCardText>
    </SponsorCardStyled>
  )
}
