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
import { Link } from 'react-router-dom'

export function MainTemplate({ children, title, button }) {
  return (
    <MainTemplateStyled>
      <HeaderStyled>
        <LogoHeader>
          <Link to="/">
            <h1>oneEvent</h1>
          </Link>
          <Icon className="fas fa-ticket-alt" size={18} />
        </LogoHeader>
        <NavbarHeader>
          <h3></h3>
          <IconStyled>
            <Link to="*">
              <Icon className="fas fa-user-circle" size={22} />
            </Link>
          </IconStyled>
        </NavbarHeader>
      </HeaderStyled>
      <Main>
        <NavBar />
        <MainContentStyled>{children}</MainContentStyled>
      </Main>
    </MainTemplateStyled>
  )
}
