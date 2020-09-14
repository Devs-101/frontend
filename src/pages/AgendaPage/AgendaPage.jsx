import React from 'react'
import { AgendaStyled } from './AgendaPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { MainTemplate } from '../../templates'
import { AgendaCard, AgendaForm, Modal } from '../../components/organisms/'
import { getAllTalksAsync, selectedTalkAsync } from '../../redux/slices/talks'
import { getAllSpeakersAsync } from '../../redux/slices/speakers'
import { useParams } from 'react-router-dom'
import { TitleContainer } from '../../components/molecules'

export function AgendaPage() {
  const { eventId } = useParams()
  const { modalIsOpen, selectedTalk } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedTalk: state.talks.selected || false
    }
  })

  const dispatch = useDispatch()
  React.useEffect(() => {
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

  async function handleOpenNewModal() {
    await dispatch(selectedTalkAsync())
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <TitleContainer>
        <h3>Schedule</h3>
        <Button className="add" onClick={handleOpenNewModal}>
          Add Talk
        </Button>
        <Modal isOpen={modalIsOpen}>
          <AgendaForm
            speakers={speakersById}
            eventId={eventId}
            talk={selectedTalk}
          />
        </Modal>
      </TitleContainer>
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
                key={talkId}
                id={talkId}
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
