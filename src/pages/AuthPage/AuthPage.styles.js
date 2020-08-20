import styled from 'styled-components'
import { colors } from '../../styles/colors'
import background from '../../assets/images/background.png'
import breakpoint from '../../styles/breakpoints'

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

  ${breakpoint.sm`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    min-height: 1200px;
  `}

  h1 {
    padding-left: 15px;
    font-size: 18px;

    ${breakpoint.sm`
      font-size: 30px;;
      grid-row: 2 / 3;
      padding-left: 0;
      text-align: center;
    `}
  }

  figure {
    width: 46px;
    height: 46px;
    img {
      width: 100%;
      height: auto;
    }
    ${breakpoint.sm`
      margin: auto;
      width: 150px;
      height: 150px;
      grid-row: 1 / 2;
    `}
  }
`

export const AuthFormStyled = styled.div`
  margin: auto;
  grid-column: 1 / 3;

  ${breakpoint.sm`
      grid-row: 4 / 5;
  `}
`

export const AuthIntroStyled = styled.p`
  display: none;
  ${breakpoint.sm`
    display: block;
    grid-row: 3 / 4;
    line-height: 1.5;
  `}
`
