import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import UserPic from '../../../assets/images/user_placeholder.png'

export const CollaboratorCardStyled = styled.div`
  border: solid 1px grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  height: 80px;
  width: 300px;
  border-radius: 10px;
  margin: 8px 8px;

  img {
    margin: 0px 24px;
    height: 40px;
    width: 40px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    color: ${colors.primary};
    font-weight: 600;
    font-size: 18px;
    text-align: left;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    color: ${colors.primary};
    font-weight: 400;
    text-align: left;
  }
`
export const CollaboratorCardPic = styled.div`
  margin: 0px 24px;
  height: 40px;
  width: 40px;
  background-image: url(${({ url }) => url || UserPic});
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

export const CollaboratorCardDataStyled = styled.div`
  display: flex;
  flex-direction: column;
`
