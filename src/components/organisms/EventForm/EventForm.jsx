import React from 'react'
import EventFormData from './EventFormData.json'
import { EventFormStyled, SubmitSection } from './EventForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'

export function EventForm() {
  return (
    <EventFormStyled>
      <SubmitSection>
        <Button>{EventFormData.buttonCancel}</Button>
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
