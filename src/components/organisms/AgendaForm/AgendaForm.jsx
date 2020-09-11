import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../atoms/'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import AgendaFormData from './AgendaFormData.json'
import { FormField } from '../../molecules'
import { AgendaFormStyled, SubmitSection } from './AgendaForm.styles'
import {
  createTalkAsync,
  getAllTalksAsync,
  updateTalkAsync,
  deleteTalkAsync
} from '../../../redux/slices/talks'
import { serializeTalkFormData, serializeTalkToFormData } from './helper'

const speakersForm = speakers => {
  const speakersForm = {
    label: 'Speaker:',
    id: 'agendaFormSpeakerId',
    type: 'select',
    options: []
  }

  speakers = Object.entries(speakers)

  for (let i = 0; i < speakers.length; i++) {
    speakersForm.options.push({
      id: speakers[i][0],
      value: speakers[i][0],
      label: speakers[i][1].name
    })
  }

  return speakersForm
}

export function AgendaForm({ speakers, eventId, talk }) {
  if (talk) {
    talk = serializeTalkToFormData(talk)
  }

  console.log('TALKK', talk)

  if (!eventId) {
    eventId = window.sessionStorage.getItem('selectedEventId')
  }

  const speakersSelect = speakersForm(speakers)

  if (AgendaFormData.fields.length === 4) {
    AgendaFormData.fields.push(speakersSelect)
  }

  const dispatch = useDispatch()
  const { handleSubmit, register } = useForm({
    defaultValues: talk
  })

  function onSubmit(data) {
    const talkFormDataSerialized = serializeTalkFormData(data)
    dispatch(
      createTalkAsync({
        talkInfo: talkFormDataSerialized,
        eventId
      })
    )
      .then(() => dispatch(getAllTalksAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onUpdate(data) {
    const talkFormDataSerialized = serializeTalkFormData(data)
    dispatch(
      updateTalkAsync({
        talkInfo: talkFormDataSerialized,
        talkId: data.agendaFormId
      })
    )
      .then(() => dispatch(getAllTalksAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onDelete(data) {
    console.log('onDelete', data)
    dispatch(
      deleteTalkAsync({
        talkId: data.agendaFormId
      })
    )
      .then(() => dispatch(getAllTalksAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <AgendaFormStyled onSubmit={handleSubmit(onSubmit)}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {AgendaFormData.buttonCancel}
        </Button>
        {talk ? (
          <>
            <Button onClick={handleSubmit(onUpdate)}>
              {AgendaFormData.buttonUpdate}
            </Button>
            <Button className="delete" onClick={handleSubmit(onDelete)}>
              {AgendaFormData.buttonDelete}
            </Button>
          </>
        ) : (
          <Button onClick={handleSubmit(onSubmit)}>
            {AgendaFormData.buttonAdd}
          </Button>
        )}
      </SubmitSection>
      <h2>{AgendaFormData.title}</h2>
      {AgendaFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          options={field.options}
          register={register}
        />
      ))}
    </AgendaFormStyled>
  )
}
