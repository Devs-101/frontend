import React from 'react'
import {
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  SelectStyled,
  ChecboxContainerStyled
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
  } else if (type === 'textarea') {
    return (
      <div>
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
        <TextAreaStyled name={id} id={id} ref={register}></TextAreaStyled>
      </div>
    )
  } else if (type === 'file') {
    return (
      <div>
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
        <InputStyled name={id} id={id} type={type} ref={register} />
      </div>
    )
  } else if (type === 'checkbox') {
    return (
      <ChecboxContainerStyled>
        <InputStyled name={id} id={id} type={type} ref={register} />
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
      </ChecboxContainerStyled>
    )
  }

  return (
    <div>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled name={id} id={id} type={type} ref={register} />
    </div>
  )
}
