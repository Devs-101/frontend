import React from 'react'
import SpeakerFormData from './SpeakerFormData.json'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { closeModal } from '../../../redux/slices/modals'
import { SpeakerFormStyled, SubmitSection } from './SpeakerForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import {
  createSpeakerAsync,
  getAllSpeakersAsync
} from '../../../redux/slices/speakers'
import { serializeSpeakerFormData } from './helper'

export function SpeakerForm() {
  const { eventId } = useSelector(state => {
    return {
      eventId: state.events.selected._id || null
    }
  })

  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm()

  function onSubmit(data) {
    const speakerFormDataSerialized = serializeSpeakerFormData(data)
    dispatch(
      createSpeakerAsync({ speakerInfo: speakerFormDataSerialized, eventId })
    )
      .then(() => dispatch(getAllSpeakersAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <SpeakerFormStyled>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {SpeakerFormData.buttonCancel}
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>
          {SpeakerFormData.buttonAdd}
        </Button>
      </SubmitSection>
      <h2>{SpeakerFormData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SpeakerFormData.fields.map(field => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            register={register}
          />
        ))}
      </form>
    </SpeakerFormStyled>
  )
}
