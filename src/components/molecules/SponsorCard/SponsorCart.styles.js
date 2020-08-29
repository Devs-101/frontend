import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const SponsorCartStyled = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 25px 24px;
  background-color: ${colors.white};

  ${breakpoint.md`
    display:block;
    width: 300px;
    height: 300px;
    text-align: center
  `} figure {
    width: 80px;
    margin: auto 16px auto 0;

    ${breakpoint.md`
      width: 180px;
      margin: 0 auto;
    `}

    img {
      width: 100%;
    }
  }
`
export const SponsorCartText = styled.div`
  margin: auto 0;
  h2 {
    font-size: 18px;

    ${breakpoint.md`
      font-size: 24px;
    `}
  }
`
