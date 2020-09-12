import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const NavBarContainerStyled = styled.nav`
  height: 106px;

  ${breakpoint.md`
  box-shadow: 0px 3px 6px #00000029;
  height: calc(100vh - 60px);
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
    background-color: #f3f3f3;
  }

  &:hover {
    background-color: #f3f3f3;
  }

  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;

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
