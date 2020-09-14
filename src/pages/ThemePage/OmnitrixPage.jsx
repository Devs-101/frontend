import React from 'react'
import { Button } from '../../components/atoms'
import {
  PublishPageStyled,
  Hero,
  HeroInfo,
  Content,
  Text,
  Title,
  Speaker,
  Agenda,
  Sponsor,
  Container,
  Form
} from './OmnitrixPage.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getPublishedEventAsync } from '../../redux/slices/events'
import { SpeakerCard, AgendaCard } from '../../components/organisms'
import { SponsorCard, FormField } from '../../components/molecules'
import { Countdown } from '../../components/atoms/Countdown'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { serializeAttendeeFormData } from './helper'
import { createAttendeesAsync } from '../../redux/slices/attendees'

export function OmnitrixPage({ countDown, eventIdProp }) {
  const { eventId } = useParams()
  if (!eventIdProp) {
    eventIdProp = eventId
  }
  const { getPublishedEvent } = useSelector(state => {
    return {
      getPublishedEvent: state.events.getPublished || false
    }
  })

  const { handleSubmit, register } = useForm()
  const [isRegister, setIsRegister] = React.useState('')

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getPublishedEventAsync(eventIdProp))
  }, [])

  function onSubmit(data) {
    console.log('onSubmit', data)
    const attendeeFormDataSerialized = serializeAttendeeFormData(data)
    dispatch(
      createAttendeesAsync({
        attendeeInfo: attendeeFormDataSerialized,
        eventId
      })
    ).then(() => {
      console.log('register ready')
      setIsRegister(data.attendeeFormEmail)
    })
  }

  if (!getPublishedEvent) return <h1>Loading</h1>

  console.log('OmnitrixPage: ', getPublishedEvent)

  const { event, speakers, talks, sponsors } = getPublishedEvent
  const initDate = new Date(event.dateHour.initDate).toLocaleDateString()

  return (
    <PublishPageStyled>
      <Hero>
        <img src={event.bannerOrHeader.img} alt={event.name} />
        <HeroInfo>
          <h1>{event.bannerOrHeader.text}</h1>
          <Countdown initDate={countDown} />
        </HeroInfo>
      </Hero>
      <Content>
        <Text>
          <Title>
            <h2>{event.name}</h2>
            <span>{initDate}</span>
          </Title>
          <div>
            <p>{event.description}</p>
          </div>
        </Text>
        <figure>
          <img src={event.img} alt={event.name} />
        </figure>
      </Content>

      {speakers.length > 0 && (
        <Speaker>
          <h2>Speaker</h2>
          <Container>
            {speakers.map(speaker => {
              return (
                <SpeakerCard
                  key={speaker._id}
                  id={speaker._id}
                  imageUrl={speaker.img}
                  speakerName={speaker.name}
                  speakerRol={speaker.rol}
                  speakerBio={speaker.bio}
                  speakerTwitter={speaker.twitter}
                />
              )
            })}
          </Container>
        </Speaker>
      )}

      {talks.length > 0 && (
        <Agenda>
          <h2>Talks</h2>
          <Container>
            {talks.map(talk => {
              return (
                <AgendaCard
                  key={talk._id}
                  id={talk._id}
                  avatar={talk.speakerId.img}
                  date={talk.initDate}
                  title={talk.name}
                  description={talk.description}
                />
              )
            })}
          </Container>
        </Agenda>
      )}

      {sponsors.length > 0 && (
        <Sponsor>
          <h2>Sponsors</h2>
          <Container>
            {sponsors.map(sponsor => {
              return (
                <SponsorCard
                  key={sponsor._id}
                  id={sponsor._id}
                  logoUrl={sponsor.img}
                  name={sponsor.name}
                  webSiteUrl={sponsor.url}
                />
              )
            })}
          </Container>
        </Sponsor>
      )}

      {isRegister ? (
        <h1>Thanks to register: {isRegister}</h1>
      ) : (
        <Form>
          <h2>Take your seat</h2>
          <FormField
            id="attendeeFormEmail"
            label="Register Now"
            type="email"
            name="attendeeFormEmail"
            register={register}
          />

          <Button onClick={handleSubmit(onSubmit)}>Register</Button>
        </Form>
      )}
    </PublishPageStyled>
  )
}
