import styled from 'styled-components'
import { colors } from '../../styles/colors'
import breakpoint from '../../styles/breakpoints'

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 40px;
  align-items: center;
  padding-left: 30px;
  h1 {
    font-size: 16px;
  }

  ${breakpoint.sm`
    height: 60px;
    h1{
      font-size: 30px;
    }
  `}
`
