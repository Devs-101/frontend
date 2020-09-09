import React from 'react'
import {
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  SelectStyled
} from './FormField.styles'

export function FormField({ id, label, register, type, options }) {
  if (type === 'select') {
    return (
      <div>
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
        <SelectStyled name={id} id={id} ref={register}>
          {options.map(option => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </SelectStyled>
      </div>
    )
  }

  if (type === 'textarea') {
    return (
      <div>
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
        <TextAreaStyled name={id} id={id} ref={register}></TextAreaStyled>
      </div>
    )
  }

  return (
    <div>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled name={id} id={id} type={type} ref={register} />
    </div>
  )
}
