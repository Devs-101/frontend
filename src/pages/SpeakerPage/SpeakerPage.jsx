import React from 'react'
import { SpeakerPageStyled, SpeakerTitle } from './SpeakerPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { MainTemplate } from '../../templates'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { SpeakerCard, SpeakerForm, Modal } from '../../components/organisms'

const MOCKS = [
  {
    id: '1',
    imageUrl: '',
    speakerName: 'Speaker 1',
    speakerRol: 'Rol del Speaker',
    speakerBio:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo voluptatum molli',
    speakerTwitter: '@Nombredelspeaker'
  }
]

export function SpeakerPage() {
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
      <SpeakerTitle>
        <h3>Speakers</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add speaker
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SpeakerForm />
        </Modal>
      </SpeakerTitle>
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
