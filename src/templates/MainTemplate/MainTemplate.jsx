import React from 'react'
import {
  MainTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled,
  HeaderStyled,
  Main
} from './MainTemplate.styles'
import { NavBar } from '../../components/organisms'
import { Icon } from '../../components/atoms'

export function MainTemplate({ children }) {
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
        {children}
      </Main>
    </MainTemplateStyled>
  )
}
