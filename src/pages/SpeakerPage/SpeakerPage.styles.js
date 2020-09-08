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

export const SpeakerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  height: 60px;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    padding: 0;
    h3 {
      font-size: 24px;
    }
  `}
`
