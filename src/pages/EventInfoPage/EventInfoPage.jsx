import React from 'react'
import { MainTemplate } from '../../templates'
import { EventInfoStyled, Container } from './EventInfoPage.styles'
import EventInfoPageData from './EventInfoPageData.json'
import { FormField, TitleContainer } from '../../components/molecules'
import { useSelector, useDispatch } from 'react-redux'
import { selectedEventAsync, updateEventAsync } from '../../redux/slices/events'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/atoms'
import { serializeEventFormData } from './helper'
import { useParams } from 'react-router-dom'

export function EventInfoPage() {
  const { eventId } = useParams()
  let { selectedEvent } = useSelector(state => {
    return {
      selectedEvent: state.events.selected || false
    }
  })

  const { handleSubmit, register } = useForm()

  const dispatch = useDispatch()
  React.useEffect(() => {
    if (!selectedEvent) {
      dispatch(selectedEventAsync(eventId)).then(
        res => (selectedEvent = res.payload)
      )
    }
  }, [])

  function onSubmit(data) {
    const eventFormDataSerialized = serializeEventFormData(data)
    dispatch(
      updateEventAsync({
        eventInfo: eventFormDataSerialized,
        eventId
      })
    ).then(() => dispatch(selectedEventAsync(selectedEvent._id)))
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
        <Container>
          {EventInfoPageData.fields.map(field => (
            <FormField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              options={field.options}
              register={register}
            />
          ))}
        </Container>
      </EventInfoStyled>
    </MainTemplate>
  )
}
