import React from 'react'
import { MainTemplate } from '../../templates'
import { List, Button } from '../../components/atoms'
import { useSelector, useDispatch } from 'react-redux'
import {
  readyForPublishEventAsync,
  publishEventAsync
} from '../../redux/slices/events'
import { useParams } from 'react-router-dom'
import { OmnitrixPage } from '../ThemePage/'
import { Container, Toolbar, IframeContainer } from './PublishPage.styles'
import PublishPageData from './PublishPageData.json'

export function PublishPage() {
  const { readyForPublish } = useSelector(state => {
    return {
      readyForPublish: state.events.readyForPublish || false
    }
  })

  const [themeSelected, setThemeSelected] = React.useState(
    PublishPageData.theme
  )
  const [withContainer, setWithContainer] = React.useState('auto')

  const { eventId } = useParams()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(readyForPublishEventAsync(eventId))
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
          <h1>Opciones de Pagina</h1>
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
                className={themeSelected === '100%' ? 'active' : null}
                data-value="100%"
                onClick={handleClickResolution}
              >
                Desktop
              </li>
              <li
                className={themeSelected === '1024px' ? 'active' : null}
                data-value="1024px"
                onClick={handleClickResolution}
              >
                Tablet
              </li>
              <li
                className={themeSelected === '375px' ? 'active' : null}
                data-value="375px"
                onClick={handleClickResolution}
              >
                Phone
              </li>
            </ul>
            <Button onClick={handleClickSubmit}>
              {PublishPageData.buttonAdd}
            </Button>
          </Toolbar>
          <IframeContainer width={withContainer}>
            {themeSelected === 'omnitrix' ? (
              <OmnitrixPage countDown={initDate} />
            ) : themeSelected === 'cuteness' ? (
              <p>Cuteness</p>
            ) : (
              <p>Other</p>
            )}
          </IframeContainer>
        </>
      )}
    </MainTemplate>
  )
}
