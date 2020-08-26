import React from 'react'
import { useDispatch } from 'react-redux'
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
import { serializeSignupFormData } from './helpers'
import { signupUserAsync } from '../../../redux/slices/users'

export function SignUpForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  function onSubmit(signupFormData) {
    const signupFormDataSerialized = serializeSignupFormData(signupFormData)
    dispatch(signupUserAsync(signupFormDataSerialized))
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
