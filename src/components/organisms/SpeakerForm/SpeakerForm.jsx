import React from 'react'
import SpeakerFormData from './SpeakerFormData.json'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import { SpeakerFormStyled, SubmitSection } from './SpeakerForm.styles'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'

export function SpeakerForm() {
  const dispatch = useDispatch()

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <SpeakerFormStyled>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {SpeakerFormData.buttonCancel}
        </Button>
        <Button>{SpeakerFormData.buttonAdd}</Button>
      </SubmitSection>
      <h2>{SpeakerFormData.title}</h2>
      <form action="">
        {SpeakerFormData.fields.map(field => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            // register={register}
          />
        ))}
      </form>
    </SpeakerFormStyled>
  )
}
