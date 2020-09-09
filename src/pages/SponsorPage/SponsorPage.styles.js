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

export const SponsorTitle = styled.div`
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
