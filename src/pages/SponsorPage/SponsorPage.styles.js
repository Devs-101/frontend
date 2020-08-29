import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const SponsorPageStyled = styled.div`
  padding: 24px 0;
  background-color: ${colors.grey};
  margin-top: 24px;

  ${breakpoint.md`
    display: flex;
    padding: 40px 62px;
  `}
`
