import React from 'react'
import { MainTemplate } from '../../templates'
import { EventInfoStyled, Container } from './EventInfoPage.styles'
import EventInfoPageData from './EventInfoPageData.json'
import { FormField, TitleContainer } from '../../components/molecules'
import { useSelector, useDispatch } from 'react-redux'
import { updateEventAsync, selectedEventAsync } from '../../redux/slices/events'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/atoms'
import { serializeEventFormData, serializeEventToFormData } from './helper'
import { useParams } from 'react-router-dom'

export function EventInfoPage() {
  const { eventId } = useParams()
  const { selectedEvent, eventsIsLoading, eventsError } = useSelector(state => {
    return {
      selectedEvent: state.events.entities[eventId] || null,
      eventsIsLoading: state.events.loading,
      eventsError: state.events.error
    }
  })

  let [isBannerImage, setIsBannerImage] = React.useState('')
  let [isEventImage, setIsEventImage] = React.useState('')

  const eventDefaultData = serializeEventToFormData(selectedEvent)

  const { handleSubmit, register, watch } = useForm({
    defaultValues: eventDefaultData
  })

  const watchDetailsFormBannerImg = watch('DetailsFormBannerImg')
  const watchDetailsFormLogo = watch('DetailsFormLogo')

  React.useEffect(() => {
    if (watchDetailsFormBannerImg && watchDetailsFormBannerImg.length >= 1) {
      const image = watchDetailsFormBannerImg[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsBannerImage(e.target.result)
      }
    } else if (selectedEvent !== null) {
      if (selectedEvent.DetailsFormBannerImgURL) {
        setIsBannerImage(selectedEvent.DetailsFormBannerImgURL)
      }
    }
  }, [watchDetailsFormBannerImg])

  React.useEffect(() => {
    if (watchDetailsFormLogo && watchDetailsFormLogo.length >= 1) {
      const image = watchDetailsFormLogo[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsEventImage(e.target.result)
      }
    } else if (selectedEvent !== null) {
      if (selectedEvent.DetailsFormLogoURL) {
        setIsEventImage(selectedEvent.DetailsFormLogoURL)
      }
    }
  }, [watchDetailsFormLogo])

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(selectedEventAsync(eventId))
  }, [])

  function onSubmit(data) {
    if (data.DetailsFormBannerImg.length === 0) {
      data.DetailsFormBannerImg = selectedEvent.bannerOrHeader.img
    } else {
      data.DetailsFormBannerImg = data.DetailsFormBannerImg[0]
    }

    if (data.DetailsFormLogo.length === 0) {
      data.DetailsFormLogo = selectedEvent.img
    } else {
      data.DetailsFormLogo = data.DetailsFormLogo[0]
    }
    const allData = {
      ...data,
      ...selectedEvent
    }
    const eventFormDataSerialized = serializeEventFormData(allData)
    dispatch(
      updateEventAsync({
        eventInfo: eventFormDataSerialized,
        eventId
      })
    ).then(() => dispatch(selectedEventAsync(eventId)))
  }

  if (!isBannerImage && selectedEvent) {
    isBannerImage = selectedEvent.bannerOrHeader.img
  }

  if (!isEventImage && selectedEvent) {
    isEventImage = selectedEvent.img
  }

  return (
    <MainTemplate>
      <TitleContainer>
        <h3>{EventInfoPageData.title}</h3>
        <Button onClick={handleSubmit(onSubmit)}>
          {EventInfoPageData.buttonAdd}
        </Button>
      </TitleContainer>
      <EventInfoStyled>
        <Container banerImage={isBannerImage} eventImage={isEventImage}>
          {eventsIsLoading ? (
            <h1>Loading...</h1>
          ) : eventsError ? (
            <h1>Error</h1>
          ) : (
            EventInfoPageData.fields.map(field => (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                options={field.options}
                register={register}
              />
            ))
          )}
        </Container>
      </EventInfoStyled>
    </MainTemplate>
  )
}
