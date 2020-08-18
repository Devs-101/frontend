import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import loginFormData from './LoginForm.json'
import { useForm } from 'react-hook-form'
import { LoginFormStyled, LoginFormTitle } from './LoginForm.styles'
import {
  FormActionText,
  FormActionLink,
  SubmitSection
} from '../SignUpForm/SingUpForm.styles'

export function LoginForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <LoginFormTitle>{loginFormData.title}</LoginFormTitle>
      {loginFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
      <SubmitSection>
        <Button>{loginFormData.button}</Button>
      </SubmitSection>
      <FormActionText>Still don´t have an acount?</FormActionText>
      <FormActionLink onClick={onFormChange}>Create an account</FormActionLink>
    </LoginFormStyled>
  )
}
