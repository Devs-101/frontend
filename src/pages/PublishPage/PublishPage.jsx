import React from 'react'
import { MainTemplate } from '../../templates'
import heroImg from '../../assets/images/placeholder_banner.png'
import { Hero, HeroInfo, Time } from './PublishPage.styles'

export function PublishPage() {
  return (
    <MainTemplate>
      <Hero>
        <img src={heroImg} alt="" />
        <HeroInfo>
          <h1>I'm so excited</h1>
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
      <section>
        <div>
          <div>
            <h2>Proyecton Cohort3</h2>
            <span>28/08/20</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore.
            </p>
          </div>
        </div>
      </section>
    </MainTemplate>
  )
}
