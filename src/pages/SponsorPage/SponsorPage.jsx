import React from 'react'
import { MainTemplate } from '../../templates'
import { SponsorCard } from '../../components/molecules'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { SponsorForm, Modal } from '../../components/organisms'
import {
  getAllSponsorsAsync,
  selectedSponsorAsync
} from '../../redux/slices/sponsors'
import { SponsorPageStyled, SponsorTitle } from './SponsorPage.styles'

export function SponsorPage() {
  const { modalIsOpen, selectedEvent, selectedSponsor } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedEvent: state.events.selected || false,
      selectedSponsor: state.sponsors.selected || false
    }
  })

  let eventId
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (selectedEvent) {
      eventId = selectedEvent._id
    }
    dispatch(getAllSponsorsAsync(eventId))
  }, [])

  const {
    sponsorsIds,
    sponsorsById,
    sponsorsLoading,
    sponsorsError
  } = useSelector(state => {
    return {
      sponsorsIds: state.sponsors.ids,
      sponsorsById: state.sponsors.entities,
      sponsorsLoading: state.sponsors.loading,
      sponsorsError: state.sponsors.error
    }
  })

  async function handleOpenNewModal() {
    await dispatch(selectedSponsorAsync())
    dispatch(openModal())
  }

  return (
    <MainTemplate>
      <SponsorTitle>
        <h3>Sponsors</h3>
        <Button type="button" onClick={handleOpenNewModal}>
          Add sponsor
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SponsorForm eventId={eventId} sponsor={selectedSponsor} />
        </Modal>
      </SponsorTitle>
      {sponsorsLoading ? (
        <h1>Loading...</h1>
      ) : sponsorsError ? (
        <h1>Error</h1>
      ) : sponsorsIds.length === 0 ? (
        <h1>No Sponsors yet, create a new one.</h1>
      ) : (
        <SponsorPageStyled>
          {sponsorsIds.map(sponsorId => {
            const sponsor = sponsorsById[sponsorId]
            return (
              <SponsorCard
                key={sponsorId}
                id={sponsorId}
                name={sponsor.name}
                webSiteUrl={sponsor.url}
                logoUrl={sponsor.img}
              />
            )
          })}
        </SponsorPageStyled>
      )}
    </MainTemplate>
  )
}
