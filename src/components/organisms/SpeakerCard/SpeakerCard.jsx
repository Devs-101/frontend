import React from 'react'
import {
  SpeakerCardStyled,
  SpeakerName,
  SpeakerRol,
  SpeakerBio,
  SpeakerTwitter,
  SpeakerCardData
} from './SpeakerCard.styles'
import { useDispatch } from 'react-redux'
import UserPic from '../../../assets/images/userplaceholder.jpg'
import { Icon } from '../../atoms'
import { openModal } from '../../../redux/slices/modals'
import { selectedSpeakerAsync } from '../../../redux/slices/speakers'

export function SpeakerCard({
  id,
  imageUrl,
  speakerName = '- - -',
  speakerRol = '- - -',
  speakerBio = '- - -',
  speakerTwitter = '- - -'
}) {
  const dispatch = useDispatch()

  async function handleClick() {
    await dispatch(selectedSpeakerAsync(id))
    dispatch(openModal())
  }

  return (
    <SpeakerCardStyled onClick={handleClick}>
      <figure>
        <img src={imageUrl || UserPic} alt={speakerName} />
      </figure>
      <SpeakerCardData>
        <SpeakerName>{speakerName}</SpeakerName>
        <SpeakerRol>{speakerRol}</SpeakerRol>
        <SpeakerBio>{speakerBio || '- - - - -'}</SpeakerBio>
        <SpeakerTwitter>
          <Icon className="fab fa-twitter" size={20} color="#0077FF" />
          <p>{speakerTwitter}</p>
        </SpeakerTwitter>
      </SpeakerCardData>
    </SpeakerCardStyled>
  )
}
