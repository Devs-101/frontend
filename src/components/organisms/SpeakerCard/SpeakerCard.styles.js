import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const SpeakerCardStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 208px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 16px;

  figure {
    margin: auto 16px;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  ${breakpoint.md`
    display: block;
    width: 300px;
    height: auto;
    max-height: 340px;
    text-align: center;
    padding: 16px 16px 25px;

    figure{
      margin: 0 auto 15px;
    }
  `}
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
`
