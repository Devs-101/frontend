import React from 'react'
import EventFormData from './EventFormData.json'
import { useDispatch } from 'react-redux'
import { EventFormStyled, SubmitSection } from './EventForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import { closeModal } from '../../../redux/slices/modals'

export function EventForm() {
  const dispatch = useDispatch()

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <EventFormStyled>
      <SubmitSection>
        <Button onClick={handleCloseModal}>{EventFormData.buttonCancel}</Button>
        <Button>{EventFormData.buttonAdd}</Button>
      </SubmitSection>
      <h2>{EventFormData.title}</h2>
      <form action="">
        {EventFormData.fields.map(field => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            // register={register}
          />
        ))}
      </form>
    </EventFormStyled>
  )
}
