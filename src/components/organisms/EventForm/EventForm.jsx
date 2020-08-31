import React from 'react'
import EventFormData from './EventFormData.json'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { EventFormStyled, SubmitSection } from './EventForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import { closeModal } from '../../../redux/slices/modals'
import {
  createEventAsync,
  getAllEventsAsync
} from '../../../redux/slices/events'
import { serializeEventFormData } from './helper'

export function EventForm() {
  const dispatch = useDispatch()
  const { id: organizationId } = useSelector(
    state => state.users.organizationInfo
  )
  const { handleSubmit, register } = useForm()

  function onSubmit(data) {
    const eventFormDataSerialized = serializeEventFormData(data)
    dispatch(
      createEventAsync({ eventInfo: eventFormDataSerialized, organizationId })
    )
      .then(() => dispatch(getAllEventsAsync(organizationId)))
      .then(() => dispatch(closeModal()))
  }

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <EventFormStyled>
      <SubmitSection>
        <Button onClick={handleCloseModal}>{EventFormData.buttonCancel}</Button>
        <Button onClick={handleSubmit(onSubmit)}>
          {EventFormData.buttonAdd}
        </Button>
      </SubmitSection>
      <h2>{EventFormData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {EventFormData.fields.map(field => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            register={register}
          />
        ))}
      </form>
    </EventFormStyled>
  )
}
