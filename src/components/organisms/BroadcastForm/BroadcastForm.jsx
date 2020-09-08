import React from 'react'
import {
  BroadcastFomrStyled,
  Title,
  SubmitSection
} from './BroadcastForm.styles'
import broadcastFormData from './BroadcastFormData.json'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import { Button } from '../../atoms'
import { FormField } from '../../molecules'

export function BroadcastForm() {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    Promise.resolve(data)
  }

  const dispatch = useDispatch()

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <BroadcastFomrStyled onSubmit={handleSubmit(onSubmit)}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {broadcastFormData.buttonCancel}
        </Button>
        <Button>{broadcastFormData.buttonSave}</Button>
      </SubmitSection>
      <Title>{broadcastFormData.title}</Title>
      {broadcastFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          options={field.options}
          register={register}
        />
      ))}
    </BroadcastFomrStyled>
  )
}
