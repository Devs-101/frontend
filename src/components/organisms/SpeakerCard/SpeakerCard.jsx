import React from 'react'
import {
  SpeakerCardStyled,
  SpeakerCardPic,
  SpeakerCardData
} from './SpeakerCard.styles'

export function SpeakerCard() {
  return (
    <SpeakerCardStyled>
      <SpeakerCardPic />
      <SpeakerCardData>
        <h3>Nombre del Speaker</h3>
        <h5>Rol del Speaker</h5>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>

        <p>@TwitterDelSpeaker</p>
      </SpeakerCardData>
    </SpeakerCardStyled>
  )
}
