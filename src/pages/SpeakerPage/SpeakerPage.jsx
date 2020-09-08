import React from 'react'
import { SpeakerPageStyled, SpeakerTitle } from './SpeakerPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { MainTemplate } from '../../templates'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { getAllSpeakersAsync } from '../../redux/slices/speakers'
import { SpeakerCard, SpeakerForm, Modal } from '../../components/organisms'

export function SpeakerPage() {
  const { modalIsOpen, selectedEvent } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedEvent: state.events.selected || null
    }
  })

  const dispatch = useDispatch()
  React.useEffect(() => {
    let eventId
    if (selectedEvent) {
      eventId = selectedEvent._id
    }
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

  function handleOpenModal() {
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <SpeakerTitle>
        <h3>Your Speakers</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add Speaker
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SpeakerForm />
        </Modal>
      </SpeakerTitle>
      {speakersLoading || speakersLoading ? (
        <h1>Loading...</h1>
      ) : !!speakersError || speakersError ? (
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
