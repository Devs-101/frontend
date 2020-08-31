import React from 'react'
import { AgendaStyled, AgendaTitle } from './AgendaPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { MainTemplate } from '../../templates'
import { AgendaCard, AgendaForm, Modal } from '../../components/organisms/'

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
  const { modalIsOpen } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen
    }
  })

  const dispatch = useDispatch()

  function handleOpenModal() {
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <AgendaTitle>
        <h3>Your Events</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add Event
        </Button>
        <Modal isOpen={modalIsOpen}>
          <AgendaForm />
        </Modal>
      </AgendaTitle>
      <AgendaStyled>
        {MOCKS.map(talk => (
          <AgendaCard
            key={talk.id}
            date={talk.date}
            title={talk.title}
            description={talk.description}
          />
        ))}
      </AgendaStyled>
    </MainTemplate>
  )
}
