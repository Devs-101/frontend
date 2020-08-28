import React from 'react'
import {
  NavBarContainerStyled,
  NavBarTitleStyled,
  NavBarItemStyled,
  NavBarStyled
} from './NavBar.styles'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <NavBarContainerStyled>
      <NavBarTitleStyled>Proyecton Cohort 3</NavBarTitleStyled>
      <NavBarStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/edit-calendar.png" />
            <span>Event Info</span>
          </Link>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/businessman--v1.png" />
            <span>Speaker</span>
          </Link>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/classroom--v1.png" />
            <span>Agenda</span>
          </Link>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/new-company--v1.png" />
            <span>Sponsor</span>
          </Link>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/filled-sent.png" />
            <span>Broadcast</span>
          </Link>
        </NavBarItemStyled>
        <NavBarItemStyled>
          <Link to="/join">
            <img src="https://img.icons8.com/material/24/000000/web.png" />
            <span>Publish</span>
          </Link>
        </NavBarItemStyled>
      </NavBarStyled>
    </NavBarContainerStyled>
  )
}
