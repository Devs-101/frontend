import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const NavBarContainerStyled = styled.nav`
  background-color: ${colors.grey};
  ${breakpoint.md`
    box-shadow: 0px 3px 6px #00000029;
    width: 250px;
    padding-top: 40px;
  `}
`
export const NavBarTitleStyled = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 16px 0 10px;

  ${breakpoint.md`
    margin: 0 20px 40px;
  `}
`
export const NavBarStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  ${breakpoint.md`
    display: block;
  `}
`

export const NavBarItemStyled = styled.li`
  .active {
    background-color: ${colors.navbar.selected};
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.navbar.selected};
  }

  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.dark};
    text-decoration: none;

    &:hover {
      color: ${colors.white};
    }

    ${breakpoint.md`
      width: 100%;
      height: 70px;
      display: grid;
      grid-template-columns: 60px 1fr;
      padding: 0 20px;
    `}
  }

  span {
    display: none;
    justify-content: center;
    font-weight: 700;

    ${breakpoint.md`
    display: block;
    `}
  }
`
