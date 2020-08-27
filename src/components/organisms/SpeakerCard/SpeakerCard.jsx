import React from 'react'
import {
  SpeakerCardStyled,
  SpeakerName,
  SpeakerRol,
  SpeakerBio,
  SpeakerTwitter,
  SpeakerCardData
} from './SpeakerCard.styles'
import UserPic from '../../../assets/images/userplaceholder.jpg'

export function SpeakerCard({
  imageUrl,
  speakerName,
  speakerRol,
  speakerBio,
  speakerTwitter
}) {
  return (
    <SpeakerCardStyled>
      <figure>
        <img src={imageUrl || UserPic} alt="" />
      </figure>
      <SpeakerCardData>
        <SpeakerName>{speakerName}</SpeakerName>
        <SpeakerRol>{speakerRol}</SpeakerRol>
        <SpeakerBio>{speakerBio}</SpeakerBio>
        <SpeakerTwitter>{speakerTwitter}</SpeakerTwitter>
      </SpeakerCardData>
    </SpeakerCardStyled>
  )
}
