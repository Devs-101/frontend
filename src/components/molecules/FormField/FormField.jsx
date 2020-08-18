import React from 'react'

export function FormField({ id, label, register, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} type={type} ref={register} />
    </div>
  )
}
