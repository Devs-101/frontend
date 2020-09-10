import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const SpeakerCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  align-items: center;
  text-align: center;

  :hover {
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  figure {
    width: 160px;
    height: 160px;

    img {
      width: 100%;
      border-radius: 50%;
      object-fit: scale-down;
    }
  }
`

export const SpeakerName = styled.h3`
  font-size: 18px;
  margin-bottom: 3px;
`

export const SpeakerRol = styled.h5`
  font-weight: 400;
  font-size: 12px;
`
export const SpeakerBio = styled.p`
  margin-top: 4px;
  ${breakpoint.md`
    margin-top: 12px;
  `}
`
export const SpeakerTwitter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${breakpoint.md`
    display: block;
    margin-top: 12px;
  `}
`

export const SpeakerCardData = styled.div`
  width: 100%;
  margin-top: 10px;
`
