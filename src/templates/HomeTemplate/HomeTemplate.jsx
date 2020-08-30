import React from 'react'
import {
  HomeTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled
} from './HomeTemplate.styles'
import { Icon } from '../../components/atoms'
import { Link } from 'react-router-dom'

export function HomeTemplate({ children }) {
  return (
    <>
      <HomeTemplateStyled>
        <LogoHeader>
          <Link to="/">
            <h1>oneEvent</h1>
          </Link>
          <Icon className="fas fa-ticket-alt" size={18} />
        </LogoHeader>
        <NavbarHeader>
          <h3></h3>

          <IconStyled>
            <Link to="/account">
              <Icon className="fas fa-user-circle" size={22} />
            </Link>
          </IconStyled>
        </NavbarHeader>
      </HomeTemplateStyled>
      {children}
    </>
  )
}
