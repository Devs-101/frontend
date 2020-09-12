import React from 'react'
// import { useForm } from 'react-hook-form'
import { MainTemplate } from '../../templates'
import { List } from '../../components/atoms'
import { useSelector, useDispatch } from 'react-redux'
import { readyForPublishEventAsync } from '../../redux/slices/events'
import { useParams } from 'react-router-dom'
// import { OmnitrixPage } from '../ThemePage/'

export function PublishPage() {
  const { readyForPublish } = useSelector(state => {
    return {
      readyForPublish: state.events.readyForPublish || false
    }
  })

  const { eventId } = useParams()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(readyForPublishEventAsync(eventId))
  }, [])

  console.log('readyForPublish', readyForPublish)

  return (
    <MainTemplate>
      {readyForPublish ? (
        <>
          <h1>Before to cotinue, please fill:</h1>
          <List readyForPublish={readyForPublish.checkComplete} />
        </>
      ) : (
        <h1>Opciones de Pagina</h1>
      )}
    </MainTemplate>
  )
}
