import React from 'react'
import {
  HomeTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled
} from './HomeTemplate.styles'
import { Icon } from '../../components/atoms'

export function HomeTemplate({ children }) {
  return (
    <>
      <HomeTemplateStyled>
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
      </HomeTemplateStyled>
      {children}
    </>
  )
}
