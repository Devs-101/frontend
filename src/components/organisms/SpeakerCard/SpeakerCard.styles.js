import styled from 'styled-components'
import UserPic from '../../../assets/images/devs101.png'
import { colors } from '../../../styles/colors'

export const SpeakerCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 380px;
  width: 300px;
  border-radius: 10px;
  margin: 8px 8px;
  border: solid 1px red;

  h3 {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }

  h5 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    margin: 16px 24px;
    padding: 8px;
  }
`
export const SpeakerCardPic = styled.div`
  margin: 24px 0px;
  min-height: 90px;
  min-width: 90px;
  background-image: url(${({ url }) => url || UserPic});
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

export const SpeakerCardData = styled.div`
  text-align: center;
`
