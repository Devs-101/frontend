import React from 'react'
// import { useForm } from 'react-hook-form'
import { MainTemplate } from '../../templates'
import { Button } from '../../components/atoms'
import heroImg from '../../assets/images/placeholder_banner.png'
import textImg from '../../assets/images/conference_picture.png'
import {
  PublishPageStyled,
  Hero,
  HeroInfo,
  Time,
  Content,
  Text,
  Title,
  Speaker,
  Agenda,
  Sponsor,
  Container,
  Form
} from './PublishPage.styles'
import { SpeakerCard, AgendaCard } from '../../components/organisms'
import { SponsorCard, FormField } from '../../components/molecules'

export function PublishPage() {
  // const { register, handleSubmit } = useForm()

  return (
    <MainTemplate>
      <PublishPageStyled>
        <Hero>
          <img src={heroImg} alt="" />
          <HeroInfo>
            <h1>I am so excited</h1>
            <Time>
              <div>
                <h1>00</h1>
                <span>Días</span>
              </div>
              <div>
                <h1>00</h1>
                <span>Horas</span>
              </div>
              <div>
                <h1>00</h1>
                <span>Minutos</span>
              </div>
            </Time>
          </HeroInfo>
        </Hero>
        <Content>
          <Text>
            <Title>
              <h2>Proyecton Cohort3</h2>
              <span>28/08/20</span>
            </Title>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
          </Text>
          <figure>
            <img src={textImg} alt="" />
          </figure>
        </Content>

        <Speaker>
          <h2>Speaker</h2>
          <Container>
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </Container>
        </Speaker>

        <Agenda>
          <h2>Agenda</h2>
          <Container>
            <AgendaCard />
            <AgendaCard />
            <AgendaCard />
            <AgendaCard />
            <AgendaCard />
            <AgendaCard />
          </Container>
        </Agenda>

        <Sponsor>
          <h2>Sponsor</h2>
          <Container>
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
            <SponsorCard />
          </Container>
        </Sponsor>

        <Form>
          <h2>Take your seat</h2>
          <FormField
            id="email"
            label="Regist now"
            type="email"
            // register={register}
          />

          <Button>Send</Button>
        </Form>
      </PublishPageStyled>
    </MainTemplate>
  )
}
