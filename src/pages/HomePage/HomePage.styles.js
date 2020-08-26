import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'

export const HomeStyled = styled.div`
  padding: 24px 0;

  ${breakpoint.md`
    padding: 35px 120px;
  `}
`
export const HomeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    padding: 0;
  `}
`
