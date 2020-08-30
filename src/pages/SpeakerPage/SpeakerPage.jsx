import React from 'react'
import { ContainerStyled } from './SpeakerPage.styles'
import { MainTemplate } from '../../templates'
import { SpeakerCard } from '../../components/organisms/SpeakerCard'
import { TitlePage } from '../../components/molecules/TitlePage'
const MOCKS = [
  {
    id: '1',
    imageUrl: '',
    speakerName: 'Speaker 1',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  },
  {
    id: '2',
    imageUrl: '',
    speakerName: 'Speaker 2',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  },
  {
    id: '3',
    imageUrl: '',
    speakerName: 'Speaker 3',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  },
  {
    id: '4',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  },
  {
    id: '5',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  },
  {
    id: '6',
    imageUrl: '',
    speakerName: 'Speaker 4',
    speakerRol: 'Rol del Speaker',
    speakerBio: 'Esta es mi Bio',
    speakerTwitter: '@twitter'
  }
]

export function SpeakerPage() {
  return (
    <MainTemplate>
      <TitlePage title="Speaker" button="Add Speaker" />
      <main>
        <ContainerStyled>
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
        </ContainerStyled>
      </main>
    </MainTemplate>
  )
}
