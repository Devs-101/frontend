import styled from 'styled-components'
import { colors } from '../../styles/colors'
import background from '../../assets/images/background.png'
// import breakpoint from '../../styles/breakpoints'

export const AuthStyled = styled.div`
  background-image: url(${background});
  height: calc(100vh - 40px);
  min-height: 770px;
  display: grid;
  grid-template-columns: 46px 1fr;
  grid-template-rows: 46px 1fr;
  row-gap: 24px;
  padding: 50px 30px 90px 30px;

  color: ${colors.white};
  h1 {
    padding-left: 15px;
    font-size: 18px;
  }

  figure {
    width: 46px;
    height: 46px;
    img {
      width: 100%;
      height: auto;
    }
  }
`

export const AuthFormStyled = styled.div`
  margin: auto;
  grid-column: 1 / 3;
`

export const AuthIntroStyled = styled.p`
  display: none;
`
