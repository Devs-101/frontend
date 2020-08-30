import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import {
  NavBarContainerStyled,
  NavBarTitleStyled,
  NavBarItemStyled,
  NavBarStyled
} from './NavBar.styles'

import { Icon } from '../../atoms'

export function NavBar() {
  const { eventId } = useParams()

  return (
    <NavBarContainerStyled>
      <NavBarTitleStyled>Proyecton Cohort 3</NavBarTitleStyled>
      <NavBarStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/event-info`} activeClassName="active">
            <Icon className="far fa-calendar-alt" size={30} />
            <span>Event Info</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/speaker`} activeClassName="active">
            <Icon className="fas fa-user-alt" size={30} />
            <span>Speaker</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/agenda`} activeClassName="active">
            <Icon className="fas fa-chalkboard-teacher" size={30} />
            <span>Agenda</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/sponsor`} activeClassName="active">
            <Icon className="fas fa-building" size={30} />
            <span>Sponsor</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/broadcast`} activeClassName="active">
            <Icon className="fas fa-broadcast-tower" size={30} />
            <span>Broadcast</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to={`/${eventId}/publish`} activeClassName="active">
            <Icon className="fas fa-table" size={30} />
            <span>Publish</span>
          </NavLink>
        </NavBarItemStyled>
      </NavBarStyled>
    </NavBarContainerStyled>
  )
}
