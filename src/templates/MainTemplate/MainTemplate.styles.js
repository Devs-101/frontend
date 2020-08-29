import styled from 'styled-components'
import { colors } from '../../styles/colors'
import breakpoint from '../../styles/breakpoints'

export const MainTemplateStyled = styled.div``

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.white};
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  align-items: center;

  ${breakpoint.sm`
    height: 60px;
  `}
`
export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 16px;
    margin-right: 10px;
  }

  ${breakpoint.sm`
    h1{
      font-size: 30px;
    }
  `}
`

export const NavbarHeader = styled.nav`
  display: flex;
  h3 {
    display: none;
    margin-right: 15px;
  }

  ${breakpoint.sm`
    h3{
      display: block;
      font-size: 18px;
    }
  `}
`

export const IconStyled = styled.p`
  cursor: pointer;
`
export const Main = styled.main`
  display: block;
  width: 100%;
  ${breakpoint.md`
    display: flex;
  `}
`
export const MainContentStyled = styled.div`
  width: 100%;
`
