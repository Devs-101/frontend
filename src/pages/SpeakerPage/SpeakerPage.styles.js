import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const SpeakerPageStyled = styled.div`
  padding: 20px;
  border-radius: 4px;
  background-color: ${colors.grey};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`

export const SpeakerTitle = styled.div`
  display: flex;
  justify-content: space-between;
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

    h3 {
      font-size: 24px;
    }
  `}
`
