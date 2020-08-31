import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  HomeTemplateStyled,
  NavbarHeader,
  LogoHeader,
  IconStyled,
  Logout
} from './HomeTemplate.styles'
import { Icon } from '../../components/atoms'

export function HomeTemplate({ children }) {
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
    <>
      <HomeTemplateStyled>
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
      </HomeTemplateStyled>
      {children}
    </>
  )
}
