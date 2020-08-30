import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const AgendaStyled = styled.div`
  padding: 24px 0;
  background-color: ${colors.grey};

  ${breakpoint.md`
    padding: 40px 60px;
  `};
`
