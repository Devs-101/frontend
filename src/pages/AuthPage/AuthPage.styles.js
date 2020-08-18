import styled from 'styled-components'
import { colors } from '../../styles/colors'
import background from '../../assets/images/background.png'

export const AuthStyled = styled.div`
  background-image: url(${background});
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const AuthTextStyled = styled.div`
  color: ${colors.white};
  z-index: 1;
  width: 70%;
  margin: auto;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  figure {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
`
export const AuthFormStyled = styled.div`
  z-index: 1;
  margin: auto;
`
