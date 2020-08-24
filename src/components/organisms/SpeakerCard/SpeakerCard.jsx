import React from 'react'
import {
  SpeakerCardStyled,
  SpeakerCardPic,
  SpeakerCardData
} from './SpeakerCard.styles'

export function SpeakerCard({
  speakerName,
  speakerRol,
  speakerBio,
  speakerTwitter
}) {
  return (
    <SpeakerCardStyled>
      <SpeakerCardPic />
      <SpeakerCardData>
        <h3>{speakerName}</h3>
        <h5>{speakerRol}</h5>
        <p>{speakerBio}</p>
        <p>{speakerTwitter}</p>
      </SpeakerCardData>
    </SpeakerCardStyled>
  )
}
