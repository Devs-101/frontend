import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import breakpoint from '../../../styles/breakpoints'

export const TitleContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  box-shadow: 0px 3px 6px #00000029;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    box-shadow: none;
    padding: 0;
    h3 {
      font-size: 24px;
    }
  `}
`
