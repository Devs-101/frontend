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
import { Icon } from '../../atoms'

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
        <SpeakerTwitter>
          <Icon className="fab fa-twitter" size={20} color="#0077FF" />
          <p>{speakerTwitter}</p>
        </SpeakerTwitter>
      </SpeakerCardData>
    </SpeakerCardStyled>
  )
}
