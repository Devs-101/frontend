import React from 'react'
import { LabelStyled, InputStyled } from './FormField.styles'

export function FormField({ id, label, register, type }) {
  return (
    <div>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled name={id} id={id} type={type} ref={register} />
    </div>
  )
}
