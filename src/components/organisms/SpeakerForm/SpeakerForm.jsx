import React from 'react'
import SpeakerFormData from './SpeakerFormData.json'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { closeModal } from '../../../redux/slices/modals'
import { SpeakerFormStyled, SubmitSection } from './SpeakerForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import {
  createSpeakerAsync,
  getAllSpeakersAsync,
  updateSpeakerAsync,
  deleteSpeakerAsync
} from '../../../redux/slices/speakers'
import { serializeSpeakerFormData, serializeSpeakerToFormData } from './helper'

export function SpeakerForm({ eventId, speaker }) {
  if (speaker) {
    speaker = serializeSpeakerToFormData(speaker)
  }

  const dispatch = useDispatch()
  const { handleSubmit, register, watch } = useForm({
    defaultValues: speaker
  })

  const [isImage, setIsImage] = React.useState('')
  const watchSpeakerFormLogo = watch('SpeakerFormLogo')

  React.useEffect(() => {
    if (watchSpeakerFormLogo && watchSpeakerFormLogo.length >= 1) {
      const image = watchSpeakerFormLogo[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsImage(e.target.result)
      }
    } else {
      if (speaker.SpeakerFormIMG) {
        setIsImage(speaker.SpeakerFormIMG)
      }
    }
  }, [watchSpeakerFormLogo])

  function onSubmit(data) {
    if (data.SpeakerFormLogo) data.SpeakerFormLogo = data.SpeakerFormLogo[0]
    const speakerFormDataSerialized = serializeSpeakerFormData(data)
    dispatch(
      createSpeakerAsync({
        speakerInfo: speakerFormDataSerialized,
        eventId
      })
    )
      .then(() => dispatch(getAllSpeakersAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onUpdate(data) {
    if (data.SpeakerFormLogo.length === 0) {
      data.SpeakerFormLogo = speaker.SponsorFormIMG
    } else {
      data.SpeakerFormLogo = data.SpeakerFormLogo[0]
    }
    const speakerFormDataSerialized = serializeSpeakerFormData(data)
    dispatch(
      updateSpeakerAsync({
        speakerInfo: speakerFormDataSerialized,
        speakerId: data.SpeakerFormId
      })
    )
      .then(() => dispatch(getAllSpeakersAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onDelete(data) {
    dispatch(
      deleteSpeakerAsync({
        speakerId: data.SpeakerFormId
      })
    )
      .then(() => dispatch(getAllSpeakersAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <SpeakerFormStyled backgroundImage={isImage}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {SpeakerFormData.buttonCancel}
        </Button>
        {speaker ? (
          <>
            <Button onClick={handleSubmit(onUpdate)}>
              {SpeakerFormData.buttonUpdate}
            </Button>
            <Button className="delete" onClick={handleSubmit(onDelete)}>
              {SpeakerFormData.buttonDelete}
            </Button>
          </>
        ) : (
          <Button onClick={handleSubmit(onSubmit)}>
            {SpeakerFormData.buttonAdd}
          </Button>
        )}
      </SubmitSection>
      <h2>{SpeakerFormData.title}</h2>
      <form>
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
