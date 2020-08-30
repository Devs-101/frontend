import React from 'react'
import { SpeakerPageStyled } from './SpeakerPage.styles'
import { MainTemplate } from '../../templates'
import { SpeakerCard } from '../../components/organisms/SpeakerCard'
import { TitlePage } from '../../components/molecules/TitlePage'
const MOCKS = [
  {
    id: '1',
    imageUrl: '',
    speakerName: 'Speaker 1',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@Nombredelspeaker'
  },
  {
    id: '2',
    imageUrl: '',
    speakerName: 'Speaker 2',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@twitter'
  },
  {
    id: '3',
    imageUrl: '',
    speakerName: 'Speaker 3',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@twitter'
  },
  {
    id: '4',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@twitter'
  },
  {
    id: '5',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@twitter'
  },
  {
    id: '6',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@twitter'
  }
]

export function SpeakerPage() {
  return (
    <MainTemplate>
      <TitlePage title="Speaker" button="Add Speaker" />
      <SpeakerPageStyled>
        {MOCKS.map(speaker => (
          <SpeakerCard
            key={speaker.id}
            imageUrl={speaker.imageUrl}
            speakerName={speaker.speakerName}
            speakerRol={speaker.speakerRol}
            speakerBio={speaker.speakerBio}
            speakerTwitter={speaker.speakerTwitter}
          />
        ))}
      </SpeakerPageStyled>
    </MainTemplate>
  )
}
