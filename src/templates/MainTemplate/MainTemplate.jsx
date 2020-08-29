import React from 'react'
import {
  MainTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled,
  HeaderStyled,
  Main,
  MainContentStyled
} from './MainTemplate.styles'
import { NavBar } from '../../components/organisms'
import { Icon } from '../../components/atoms'
import { TitlePage } from '../../components/molecules'

export function MainTemplate({ children, title, button }) {
  return (
    <MainTemplateStyled>
      <HeaderStyled>
        <LogoHeader>
          <h1>oneEvent</h1>
          <Icon className="fas fa-ticket-alt" size={18} />
        </LogoHeader>
        <NavbarHeader>
          <h3></h3>
          <IconStyled>
            <Icon className="fas fa-user-circle" size={22} />
          </IconStyled>
        </NavbarHeader>
      </HeaderStyled>
      <Main>
        <NavBar />
        <MainContentStyled>
          <TitlePage title={title} button={button} />
          {children}
        </MainContentStyled>
      </Main>
    </MainTemplateStyled>
  )
}
