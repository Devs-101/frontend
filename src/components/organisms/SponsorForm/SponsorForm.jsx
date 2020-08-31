import React from 'react'
import SponsorFormData from './SponsorFormData.json'
import { useForm } from 'react-hook-form'
import { FormStyled, SubmitSection } from './SponsorForm.styles'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'

export function SponsorForm() {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    Promise.resolve(data)
  }

  const dispatch = useDispatch()

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {SponsorFormData.buttonCancel}
        </Button>{' '}
        <Button type="submit">{SponsorFormData.buttonSave}</Button>
      </SubmitSection>
      <h2>{SponsorFormData.title}</h2>
      {SponsorFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
    </FormStyled>
  )
}
