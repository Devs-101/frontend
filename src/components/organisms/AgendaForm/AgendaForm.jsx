import React from 'react'
import { Button } from '../../atoms'
import AgendaFormData from './AgendaFormData.json'
import { FormField } from '../../molecules'
import { AgendaFomrStyled, SubmitSection, Title } from './AgendaForm.styles'

export function AgendaForm() {
  return (
    <AgendaFomrStyled>
      <SubmitSection>
        <Button>{AgendaFormData.buttonCancel}</Button>
        <Button>{AgendaFormData.buttonSave}</Button>
      </SubmitSection>
      <Title>{AgendaFormData.title}</Title>
      {AgendaFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
        />
      ))}
    </AgendaFomrStyled>
  )
}
