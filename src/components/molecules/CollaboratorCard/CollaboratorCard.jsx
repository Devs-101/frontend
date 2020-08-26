import React from 'react'
import {
  CollaboratorCardStyled,
  CollaboratorCardDataStyled
} from './CollaboratorCard.styles'
import userpic from '../../../assets/images/user_placeholder.png'

export function CollaboratorCard({ imageUrl, name, userType }) {
  return (
    <CollaboratorCardStyled>
      <figure>
        <img src={imageUrl || userpic} alt="Collabator" />
      </figure>
      <CollaboratorCardDataStyled>
        <h3>{name}</h3>
        <p>{userType}</p>
      </CollaboratorCardDataStyled>
    </CollaboratorCardStyled>
  )
}
