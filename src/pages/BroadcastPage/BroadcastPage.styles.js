import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const BroadcastPageStyled = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 50px 30px 30px 30px;
  background-color: ${colors.grey};
  max-width: 100%;

  ${breakpoint.md`
    grid-template-columns: 1fr;
    padding: 35px 120px;
    `}
`
