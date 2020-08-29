import React from 'react'
import {
  NavBarContainerStyled,
  NavBarTitleStyled,
  NavBarItemStyled,
  NavBarStyled
} from './NavBar.styles'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../atoms'

export function NavBar() {
  return (
    <NavBarContainerStyled>
      <NavBarTitleStyled>Proyecton Cohort 3</NavBarTitleStyled>
      <NavBarStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="far fa-calendar-alt" size={30} />
            <span>Event Info</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="fas fa-user-alt" size={30} />
            <span>Speaker</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="fas fa-chalkboard-teacher" size={30} />
            <span>Agenda</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="fas fa-building" size={30} />
            <span>Sponsor</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="fas fa-broadcast-tower" size={30} />
            <span>Broadcast</span>
          </NavLink>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <NavLink to="/join" activeClassName="active">
            <Icon className="fas fa-table" size={30} />
            <span>Publish</span>
          </NavLink>
        </NavBarItemStyled>
      </NavBarStyled>
    </NavBarContainerStyled>
  )
}
