import React from 'react'
import { MainTemplate } from '../../templates'
import { SponsorCard } from '../../components/molecules'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { SponsorForm, Modal } from '../../components/organisms'
import { SponsorPageStyled, SponsorTitle } from './SponsorPage.styles'

export function SponsorPage() {
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
      <SponsorTitle>
        <h3>Your Events</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add Event
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SponsorForm />
        </Modal>
      </SponsorTitle>
      <SponsorPageStyled>
        <SponsorCard />
      </SponsorPageStyled>
    </MainTemplate>
  )
}
