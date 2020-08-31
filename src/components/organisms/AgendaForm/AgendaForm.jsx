import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../atoms'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import AgendaFormData from './AgendaFormData.json'
import { FormField } from '../../molecules'
import { AgendaFomrStyled, SubmitSection, Title } from './AgendaForm.styles'

export function AgendaForm() {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    Promise.resolve(data)
  }

  const dispatch = useDispatch()

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <AgendaFomrStyled onSubmit={handleSubmit(onSubmit)}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {AgendaFormData.buttonCancel}
        </Button>{' '}
        <Button type="submit">{AgendaFormData.buttonSave}</Button>
      </SubmitSection>
      <Title>{AgendaFormData.title}</Title>
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
    </AgendaFomrStyled>
  )
}
