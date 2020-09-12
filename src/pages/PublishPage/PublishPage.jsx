import React from 'react'
import { MainTemplate } from '../../templates'
import { useSelector, useDispatch } from 'react-redux'
import { readyForPublishEventAsync } from '../../redux/slices/events'
import { useParams } from 'react-router-dom'

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
      <h1>Publish</h1>
    </MainTemplate>
  )
}
