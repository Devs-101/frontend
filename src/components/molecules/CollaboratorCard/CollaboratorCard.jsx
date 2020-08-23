import React from 'react'
import {
  CollaboratorCardStyled,
  CollaboratorCardDataStyled,
  CollaboratorCardPic
} from './CollaboratorCard.styles'

export function CollaboratorCard({ name, url, userType }) {
  return (
    <CollaboratorCardStyled>
      <CollaboratorCardPic url={url} />
      <CollaboratorCardDataStyled>
        <h3>{name}</h3>
        <p>{userType}</p>
      </CollaboratorCardDataStyled>
    </CollaboratorCardStyled>
  )
}
