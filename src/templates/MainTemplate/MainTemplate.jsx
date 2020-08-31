import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {
  MainTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled,
  HeaderStyled,
  Main,
  MainContentStyled,
  Logout
} from './MainTemplate.styles'
import { NavBar } from '../../components/organisms'
import { Icon } from '../../components/atoms'

export function MainTemplate({ children, title, button }) {
  const { name } = useSelector(state => {
    return {
      name: state.users.userInfo.name
    }
  })

  const { push } = useHistory()

  function handleLogOut() {
    window.sessionStorage.removeItem('jwt')
    push('/join')
  }

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
          <h3>{name}</h3>
          <IconStyled>
            <Link to="/account">
              <Icon className="fas fa-user-circle" size={22} />
            </Link>
          </IconStyled>
          <Logout onClick={handleLogOut}>
            <Icon className="fas fa-sign-out-alt" size={22} />
          </Logout>
        </NavbarHeader>
      </HeaderStyled>
      <Main>
        <NavBar />
        <MainContentStyled>{children}</MainContentStyled>
      </Main>
    </MainTemplateStyled>
  )
}
