import React from 'react'
import { AgendaStyled, ContainerStyled } from './AgendaPage.styles'
import { MainTemplate } from '../../templates'
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
    <MainTemplate title="Agenda" button="Add">
      <AgendaStyled>
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
    </MainTemplate>
  )
}
