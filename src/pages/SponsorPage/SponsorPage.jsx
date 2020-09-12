import React from 'react'
import { MainTemplate } from '../../templates'
import { SponsorCard, TitleContainer } from '../../components/molecules'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/atoms'
import { openModal } from '../../redux/slices/modals'
import { SponsorForm, Modal } from '../../components/organisms'
import {
  getAllSponsorsAsync,
  selectedSponsorAsync
} from '../../redux/slices/sponsors'
import { SponsorPageStyled } from './SponsorPage.styles'
import { useParams } from 'react-router-dom'

export function SponsorPage() {
  const { modalIsOpen, selectedSponsor } = useSelector(state => {
    return {
      modalIsOpen: state.modals.isOpen,
      selectedSponsor: state.sponsors.selected || false
    }
  })

  const { eventId } = useParams()
  const dispatch = useDispatch()
  React.useEffect(() => {
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
      <TitleContainer>
        <h3>Sponsors</h3>
        <Button type="button" onClick={handleOpenNewModal}>
          Add sponsor
        </Button>
        <Modal isOpen={modalIsOpen}>
          <SponsorForm eventId={eventId} sponsor={selectedSponsor} />
        </Modal>
      </TitleContainer>
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
