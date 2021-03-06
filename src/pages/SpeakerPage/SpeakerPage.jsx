import React from 'react'
import { SpeakerPageStyled } from './SpeakerPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { MainTemplate } from '../../templates'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import {
  getAllSpeakersAsync,
  selectedSpeakerAsync
} from '../../redux/slices/speakers'
import { SpeakerCard, SpeakerForm, Modal } from '../../components/organisms'
import { TitleContainer } from '../../components/molecules'
import { useParams } from 'react-router-dom'

export function SpeakerPage() {
  const { modalIsOpen, selectedSpeaker } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedSpeaker: state.speakers.selected || false
    }
  })

  const { eventId } = useParams()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getAllSpeakersAsync(eventId))
  }, [])

  const {
    speakersIds,
    speakersById,
    speakersLoading,
    speakersError
  } = useSelector(state => {
    return {
      speakersIds: state.speakers.ids,
      speakersById: state.speakers.entities,
      speakersLoading: state.speakers.loading,
      speakersError: state.speakers.error
    }
  })

  async function handleOpenNewModal() {
    await dispatch(selectedSpeakerAsync())
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <TitleContainer>
        <h3>Speakers</h3>
        <Button className="add" onClick={handleOpenNewModal}>
          Add Speaker
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SpeakerForm eventId={eventId} speaker={selectedSpeaker} />
        </Modal>
      </TitleContainer>
      {speakersLoading ? (
        <h1>Loading...</h1>
      ) : speakersError ? (
        <h1>Error</h1>
      ) : speakersIds.length === 0 ? (
        <h1>No Speakers yet, create a new one.</h1>
      ) : (
        <SpeakerPageStyled>
          {speakersIds.map(speakerId => {
            const speaker = speakersById[speakerId]
            return (
              <SpeakerCard
                key={speakerId}
                id={speakerId}
                imageUrl={speaker.img}
                speakerName={speaker.name}
                speakerRol={speaker.rol}
                speakerBio={speaker.bio}
                speakerTwitter={speaker.twitter}
              />
            )
          })}
        </SpeakerPageStyled>
      )}
    </MainTemplate>
  )
}
