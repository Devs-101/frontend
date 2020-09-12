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
  const { handleSubmit, register, watch } = useForm()
  const [isImage, setIsImage] = React.useState('')
  const watchEventFormLogo = watch('EventFormLogo')

  React.useEffect(() => {
    if (watchEventFormLogo && watchEventFormLogo.length >= 1) {
      const image = watchEventFormLogo[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsImage(e.target.result)
      }
    }
  }, [watchEventFormLogo])

  function onSubmit(data) {
    if (data.EventFormLogo) data.EventFormLogo = data.EventFormLogo[0]
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
    <EventFormStyled backgroundImage={isImage}>
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
