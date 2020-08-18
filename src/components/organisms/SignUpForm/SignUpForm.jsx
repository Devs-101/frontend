import React from 'react'
import { FormField } from '../../molecules/FormField/FormField'
import signUpFormData from './SingUpForm.json'
import { useForm } from 'react-hook-form'
import { Button } from '../../atoms/Button/Button'

export function SignUpForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{signUpFormData.title}</h1>
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
    </form>
  )
}
