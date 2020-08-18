import React from 'react'
import { FormField } from '../../molecules/FormField/FormField'
import signUpFormData from './SingUpForm.json'
import { useForm } from 'react-hook-form'
import { Button } from '../../atoms/Button/Button'
import { SingUpFormStyled } from './SingUpForm.styles'

export function SignUpForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <SingUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <h3>{signUpFormData.title}</h3>
      {signUpFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
      <Button>{signUpFormData.button}</Button>
      <p>Wait! i have an acount.</p>
      <p onClick={onFormChange}>Log in here</p>
    </SingUpFormStyled>
  )
}
