import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const TitlePageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    padding: 0;
  `}
`
