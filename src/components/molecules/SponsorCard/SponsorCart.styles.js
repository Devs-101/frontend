import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const SponsorCartStyled = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 50px 24px;

  ${breakpoint.md`
    display:block;
    width: 300px;
    heigth: 300px;
    text-align: center
  `}

  figure {
    width: 80px;
    margin: auto 16px auto 0;

    ${breakpoint.md`
      width: 180px;
      margin: 20px auto 0;
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
