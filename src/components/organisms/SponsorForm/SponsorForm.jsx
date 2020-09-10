import React from 'react'
import SponsorFormData from './SponsorFormData.json'
import { useForm } from 'react-hook-form'
import { FormStyled, SubmitSection } from './SponsorForm.styles'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modals'
import { Button } from '../../atoms/Button/Button'
import { FormField } from '../../molecules/FormField/FormField'
import {
  createSponsorAsync,
  updateSponsorAsync,
  deleteSponsorAsync,
  getAllSponsorsAsync
} from '../../../redux/slices/sponsors'
import { serializeSponsorFormData, serializeSponsorToFormData } from './helper'

export function SponsorForm({ eventId, sponsor }) {
  if (sponsor) {
    sponsor = serializeSponsorToFormData(sponsor)
  }

  const dispatch = useDispatch()
  const { handleSubmit, register, watch } = useForm({
    defaultValues: sponsor
  })

  const [isImage, setIsImage] = React.useState('')
  const watchSponsorFormLogo = watch('SponsorFormLogo')

  React.useEffect(() => {
    if (watchSponsorFormLogo && watchSponsorFormLogo.length >= 1) {
      const image = watchSponsorFormLogo[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsImage(e.target.result)
      }
    } else {
      if (sponsor.SponsorFormIMG) {
        setIsImage(sponsor.SponsorFormIMG)
      }
    }
  }, [watchSponsorFormLogo])

  function onSubmit(data) {
    if (data.SponsorFormLogo) data.SponsorFormLogo = data.SponsorFormLogo[0]
    const sponsorFormDataSerialized = serializeSponsorFormData(data)
    dispatch(
      createSponsorAsync({
        sponsorInfo: sponsorFormDataSerialized,
        eventId
      })
    )
      .then(() => dispatch(getAllSponsorsAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onUpdate(data) {
    if (data.SponsorFormLogo.length === 0) {
      data.SponsorFormLogo = sponsor.SponsorFormIMG
    } else {
      data.SponsorFormLogo = data.SponsorFormLogo[0]
    }
    const sponsorFormDataSerialized = serializeSponsorFormData(data)
    dispatch(
      updateSponsorAsync({
        sponsorInfo: sponsorFormDataSerialized,
        sponsorId: data.SponsorFormId
      })
    )
      .then(() => dispatch(getAllSponsorsAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function onDelete(data) {
    dispatch(
      deleteSponsorAsync({
        sponsorId: data.SponsorFormId
      })
    )
      .then(() => dispatch(getAllSponsorsAsync(eventId)))
      .then(() => dispatch(closeModal()))
  }

  function handleCloseModal() {
    dispatch(closeModal())
  }

  return (
    <FormStyled backgroundImage={isImage}>
      <SubmitSection>
        <Button onClick={handleCloseModal}>
          {SponsorFormData.buttonCancel}
        </Button>
        {sponsor ? (
          <>
            <Button onClick={handleSubmit(onUpdate)}>
              {SponsorFormData.buttonUpdate}
            </Button>
            <Button className="delete" onClick={handleSubmit(onDelete)}>
              {SponsorFormData.buttonDelete}
            </Button>
          </>
        ) : (
          <Button onClick={handleSubmit(onSubmit)}>
            {SponsorFormData.buttonAdd}
          </Button>
        )}
      </SubmitSection>
      <h2>{SponsorFormData.title}</h2>
      {SponsorFormData.fields.map(field => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          register={register}
        />
      ))}
    </FormStyled>
  )
}
