import React from 'react'
import { FormField } from '../../molecules/FormField/FormField'
import signUpFormData from './SingUpFormData.json'
import { useForm } from 'react-hook-form'
import { Button } from '../../atoms/Button/Button'
import {
  FormStyled,
  FormTitle,
  FormActionText,
  FormActionLink,
  SubmitSection
} from './SingUpForm.styles'

export function SignUpForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>{signUpFormData.title}</FormTitle>
      {signUpFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
      <SubmitSection>
        <Button>{signUpFormData.button}</Button>
      </SubmitSection>
      <FormActionText>Wait! I have an acount.</FormActionText>
      <FormActionLink onClick={onFormChange}>Log in here</FormActionLink>
    </FormStyled>
  )
}
