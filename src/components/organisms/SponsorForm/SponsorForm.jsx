import React from 'react'
import SponsorFormData from './SponsorFormData.json'
import { SponsorFormStyled, SubmitSection } from './SponsorForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'

export function SponsorForm() {
  return (
    <SponsorFormStyled>
      <SubmitSection>
        <Button>{SponsorFormData.buttonCancel}</Button>
        <Button>{SponsorFormData.buttonAdd}</Button>
      </SubmitSection>
      <h2>{SponsorFormData.title}</h2>
      <form action="">
        {SponsorFormData.fields.map(field => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            // register={register}
          />
        ))}
      </form>
    </SponsorFormStyled>
  )
}
