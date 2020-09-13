import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const SponsorCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  background-color: ${colors.white};
  cursor: pointer;
  align-items: center;
  text-align: center;

  :hover {
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  figure {
    width: 260px;
    height: 260px;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export const SponsorCardText = styled.div`
  margin: auto 0;
  width: inherit;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 0.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    ${breakpoint.md`
      font-size: 24px;
    `}
  }
`
