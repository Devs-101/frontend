import React, { useState } from 'react'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import loginFormData from './LoginForm.json'
import { useForm } from 'react-hook-form'

export function LoginForm({ onFormChange }) {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{loginFormData.title}</h1>
      {loginFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
      <Button>{loginFormData.button}</Button>
      <p>Still don´t have an acount?</p>
      <p onClick={onFormChange}>Create an account</p>
    </form>
  )
}
