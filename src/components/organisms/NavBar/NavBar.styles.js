import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const NavBarContainerStyled = styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 120px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;

  ${breakpoint.md`
  height: 100vh;
  width: 256px;
  `}
`
export const NavBarTitleStyled = styled.div`
  position: relative;
  color: #969393;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 0px;
  height: 40px;
  width: 100%;

  ${breakpoint.md`
    position: relative;
    margin-left: 25px;
    height: 140px;
    width: 80%;
  `}
`
export const NavBarStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  height: 100% -140px;

  ${breakpoint.md`
    flex-direction: column;
  `}
`

export const NavBarItemStyled = styled.li`
  align-content: center;
  width: 100%;

  &:hover {
    background-color: #f3f3f3;
  }

  a {
    display: flex;
    align-items: center;
    height: 80px;
    color: black;
    text-decoration: none;
  }

  img {
    width: 32px;
    min-width: 32px;
    margin: 0 24px;
  }

  span {
    display: none;
    justify-content: center;
    color: #969393;
    font-weight: 700;
    margin-left: 16px;

    ${breakpoint.md`
    display: block;
  `}
  }
`
