import React from 'react'
import { BroadcastPageStyled, BroadcastTitle } from './BroadcastPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../redux/slices/modals'
import { MainTemplate } from '../../templates'
import { BroadcastCard, BroadcastForm, Modal } from '../../components/organisms'
import { Button } from '../../components/atoms'

export function BroadcastPage() {
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
      <BroadcastTitle>
        <h3>Broadcast</h3>
        <Button type="button" onClick={handleOpenModal}>
          Add Message
        </Button>
        <Modal isOpen={modalIsOpen}>
          <BroadcastForm />
        </Modal>
      </BroadcastTitle>
      <BroadcastPageStyled>
        <BroadcastCard />
      </BroadcastPageStyled>
    </MainTemplate>
  )
}
