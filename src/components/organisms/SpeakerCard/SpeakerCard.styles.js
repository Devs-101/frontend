import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const SpeakerCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 380px;
  min-width: 150px;
  border-radius: 10px;
  margin: 8px 8px;

  figure {
    margin: 24px 0px;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }
`

export const SpeakerName = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`

export const SpeakerRol = styled.h5`
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`
export const SpeakerBio = styled.p`
  font-family: 'Work Sans', sans-serif;
  margin: 16px 24px;
  padding: 8px;
`
export const SpeakerTwitter = styled.p`
  font-family: 'Work Sans', sans-serif;
  margin: 16px 24px;
  padding: 8px;
`

export const SpeakerCardData = styled.div`
  text-align: center;
`
