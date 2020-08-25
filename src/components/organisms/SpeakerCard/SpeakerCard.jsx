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
  url,
  speakerName,
  speakerRol,
  speakerBio,
  speakerTwitter
}) {
  return (
    <SpeakerCardStyled>
      <figure>
        <img src={url || UserPic} alt="" />
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
