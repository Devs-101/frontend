import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const CollaboratorCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  height: 80px;
  width: 300px;
  border-radius: 10px;
  margin: 8px 8px;

  figure {
    margin: 0px 24px;
  }

  img {
    height: 40px;
    border-radius: 50%;
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

export const CollaboratorCardDataStyled = styled.div`
  display: flex;
  flex-direction: column;
`
