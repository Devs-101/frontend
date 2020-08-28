import React from 'react'
import { AgendaStyled, AgendaTitle, ContainerStyled } from './AgendaPage.styles'
import { Button } from '../../components/atoms'
import { HomeTemplate } from '../../templates'
import { AgendaCard } from '../../components/organisms/'

const MOCKS = [
  {
    id: '1',
    date: '28 / 08/ 20 - 10:00 am',
    title: 'Talk 1',
    description: 'Super Description of Talk 1'
  },
  {
    id: '2',
    date: '28 / 08/ 20 - 10:00 am',
    title: 'Talk 2',
    description: 'Super Description of Talk 2'
  },
  {
    id: '3',
    date: '28 / 08/ 20 - 10:00 am',
    title: 'Talk 3',
    description: 'Super Description of Talk 3'
  }
]

export function AgendaPage() {
  return (
    <HomeTemplate>
      <AgendaStyled>
        <AgendaTitle>
          <h3>Your Schedule</h3>
          <Button>Add Talk</Button>
        </AgendaTitle>
        <main>
          <ContainerStyled>
            {MOCKS.map(talk => (
              <AgendaCard
                key={talk.id}
                date={talk.date}
                title={talk.title}
                description={talk.description}
              />
            ))}
          </ContainerStyled>
        </main>
      </AgendaStyled>
    </HomeTemplate>
  )
}
