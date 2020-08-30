import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const SpeakerPageStyled = styled.div`
  padding: 24px 0;
  background-color: ${colors.grey};

  ${breakpoint.md`
    display: grid;
    column-gap: 10px;
    grid-template-columns: repeat(auto-fill, 300px);
    padding: 40px 60px;
  `};
`
