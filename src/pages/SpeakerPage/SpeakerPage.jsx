import React from 'react'
import { HomeStyled, ContainerStyled } from './SpeakerPage.styles'
import { HomeTemplate } from '../../templates'
import { SpeakerCard } from '../../components/organisms/SpeakerCard'

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
  }
]

export function SpeakerPage() {
  return (
    <HomeTemplate>
      <HomeStyled>
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
      </HomeStyled>
    </HomeTemplate>
  )
}
