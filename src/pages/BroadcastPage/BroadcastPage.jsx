import React from 'react'
import { BroadcastFomrStyled, BroadcastTitle } from './BroadcastPage.styles'
import { useDispatch } from 'react-redux'
import { MainTemplate } from '../../templates'
import { FormField, TitleContainer } from '../../components/molecules/'
import { Button } from '../../components/atoms'
import broadcastFormData from './BroadcastFormData.json'
import { useForm } from 'react-hook-form'
import {
  getBroadcastAsync,
  updateBroadcastAsync
} from '../../redux/slices/broadcast'
import {
  serializeBroadcastToFormData,
  serializeBroadcastFormData
} from './helper'
import { useParams } from 'react-router-dom'

export function BroadcastPage() {
  const { eventId } = useParams()
  const [isImage, setIsImage] = React.useState('')
  const [broadcast, setBroadcast] = React.useState({})

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getBroadcastAsync(eventId)).then(res => {
      const broadcastInfo = serializeBroadcastToFormData(res.payload.broadcast)
      setValue('broadcastFormSubjet', broadcastInfo.broadcastFormSubjet)
      setValue('broadcastFormMessage', broadcastInfo.broadcastFormMessage)
      setIsImage(broadcastInfo.BroadcastFormIMG)
      setBroadcast(broadcastInfo)
    })
  }, [])

  const { register, handleSubmit, watch, setValue } = useForm()
  const watchBroadcastFormLogo = watch('broadcastFormLogo')

  React.useEffect(() => {
    if (watchBroadcastFormLogo && watchBroadcastFormLogo.length >= 1) {
      const image = watchBroadcastFormLogo[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        setIsImage(e.target.result)
      }
    } else {
      if (broadcast.BroadcastFormIMG) {
        setIsImage(broadcast.BroadcastFormIMG)
      }
    }
  }, [watchBroadcastFormLogo])

  function onUpdate(data) {
    if (data.broadcastFormLogo.length === 0) {
      data.broadcastFormLogo = broadcast.BroadcastFormIMG
    } else {
      data.broadcastFormLogo = data.broadcastFormLogo[0]
    }
    const broadcastFormDataSerialized = serializeBroadcastFormData(data)
    dispatch(
      updateBroadcastAsync({
        broadcastInfo: broadcastFormDataSerialized,
        eventId
      })
    )
  }

  return (
    <MainTemplate>
      <TitleContainer>
        <h3>Broadcast</h3>
        <Button onClick={handleSubmit(onUpdate)}>
          {broadcastFormData.buttonAdd}
        </Button>
      </TitleContainer>
      <BroadcastFomrStyled
        backgroundImage={isImage}
        onSubmit={handleSubmit(onUpdate)}
      >
        {!broadcast ? (
          <h1>Cargando Datos</h1>
        ) : (
          broadcastFormData.fields.map(field => (
            <FormField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              options={field.options}
              register={register}
            />
          ))
        )}
      </BroadcastFomrStyled>
    </MainTemplate>
  )
}
