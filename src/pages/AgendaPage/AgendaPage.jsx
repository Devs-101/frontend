import React from 'react'
import { AgendaStyled, AgendaTitle } from './AgendaPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { MainTemplate } from '../../templates'
import { AgendaCard, AgendaForm, Modal } from '../../components/organisms/'
import { getAllTalksAsync } from '../../redux/slices/talks'
import { getAllSpeakersAsync } from '../../redux/slices/speakers'

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
  const { modalIsOpen, selectedEvent } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedEvent: state.events.selected || null
    }
  })

  let eventId
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (selectedEvent) {
      eventId = selectedEvent._id
    }
    dispatch(getAllTalksAsync(eventId))
    dispatch(getAllSpeakersAsync(eventId))
  }, [])

  const {
    talksIds,
    talksById,
    talksLoading,
    talksError,
    speakersById,
    speakersLoading,
    speakersError
  } = useSelector(state => {
    return {
      talksIds: state.talks.ids,
      talksById: state.talks.entities,
      talksLoading: state.talks.loading,
      talksError: state.talks.error,
      speakersById: state.speakers.entities,
      speakersLoading: state.speakers.loading,
      speakersError: state.speakers.error
    }
  })

  function handleOpenModal() {
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <AgendaTitle>
        <h3>Schedule</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add Talk
        </Button>
        <Modal isOpen={modalIsOpen}>
          <AgendaForm speakers={speakersById} eventId={eventId} />
        </Modal>
      </AgendaTitle>
      {talksLoading || speakersLoading ? (
        <h1>Loading...</h1>
      ) : !!talksError || speakersError ? (
        <h1>Error</h1>
      ) : talksIds.length === 0 ? (
        <h1>No talks yet, create a new one.</h1>
      ) : (
        <AgendaStyled>
          {talksIds.map(talkId => {
            const talk = talksById[talkId]
            return (
              <AgendaCard
                key={talk._id}
                date={talk.initDate}
                title={talk.name}
                description={talk.description}
                avatar={talk.speakerId.img}
              />
            )
          })}
        </AgendaStyled>
      )}
    </MainTemplate>
  )
}
