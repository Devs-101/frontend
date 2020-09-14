import React from 'react'
import { MainTemplate } from '../../templates'
import { List, Button } from '../../components/atoms'
import { useSelector, useDispatch } from 'react-redux'
import {
  readyForPublishEventAsync,
  publishEventAsync,
  getPublishedEventAsync
} from '../../redux/slices/events'
import { useParams } from 'react-router-dom'
import { OmnitrixPage, PoePage } from '../ThemePage/'
import { Container, Toolbar, IframeContainer } from './PublishPage.styles'
import PublishPageData from './PublishPageData.json'

export function PublishPage() {
  const { readyForPublish, publishedEvent } = useSelector(state => {
    return {
      readyForPublish: state.events.readyForPublish || false,
      publishedEvent: state.events.getPublished || false
    }
  })

  const [themeSelected, setThemeSelected] = React.useState(
    PublishPageData.theme
  )
  const [withContainer, setWithContainer] = React.useState('auto')
  const [eventStatus, setEventStatus] = React.useState(false)

  const { eventId } = useParams()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(readyForPublishEventAsync(eventId))
    if (!publishedEvent) {
      dispatch(getPublishedEventAsync(eventId))
    }
  }, [])

  if (!readyForPublish) return false
  // NEED LOADING

  const { checkComplete, initDate } = readyForPublish

  function handleClickToolbar(event) {
    setThemeSelected(event.currentTarget.getAttribute('data-value'))
  }

  function handleClickResolution(event) {
    setWithContainer(event.currentTarget.getAttribute('data-value'))
  }

  function handleClickSubmit() {
    dispatch(
      publishEventAsync({
        theme: themeSelected,
        eventId
      })
    )
  }

  if (publishedEvent) {
    if (themeSelected !== publishedEvent.event.theme) {
      setThemeSelected(publishedEvent.event.theme)
      setEventStatus(publishedEvent.event.eventStatus)
    }
  }

  return (
    <MainTemplate>
      {checkComplete.length > 0 ? (
        <>
          <Container>
            <h1>Before to cotinue, please complete:</h1>
            <List readyForPublish={checkComplete} />
          </Container>
        </>
      ) : (
        <>
          <Toolbar>
            <ul>
              {PublishPageData.themes.map(theme => (
                <li
                  key={theme.id}
                  className={themeSelected === theme.id ? 'active' : null}
                  data-value={theme.id}
                  onClick={handleClickToolbar}
                >
                  {theme.label}
                </li>
              ))}
            </ul>
            <ul>
              <li
                className={withContainer === '100%' ? 'active' : null}
                data-value="100%"
                onClick={handleClickResolution}
              >
                Desktop
              </li>
              <li
                className={withContainer === '1024px' ? 'active' : null}
                data-value="1024px"
                onClick={handleClickResolution}
              >
                Tablet
              </li>
              <li
                className={withContainer === '375px' ? 'active' : null}
                data-value="375px"
                onClick={handleClickResolution}
              >
                Phone
              </li>
            </ul>
            {eventStatus ? (
              <Button className="cancel">Event Published</Button>
            ) : (
              <Button className="add" onClick={handleClickSubmit}>
                {PublishPageData.buttonAdd}
              </Button>
            )}
          </Toolbar>
          <IframeContainer width={withContainer}>
            {themeSelected === 'omnitrix' ? (
              <OmnitrixPage eventIdProp={eventId} countDown={initDate} />
            ) : themeSelected === 'poe' ? (
              <PoePage eventIdProp={eventId} countDown={initDate} />
            ) : (
              <p>Invalid Theme</p>
            )}
          </IframeContainer>
        </>
      )}
    </MainTemplate>
  )
}
