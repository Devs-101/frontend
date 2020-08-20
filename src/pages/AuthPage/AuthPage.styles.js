import styled from 'styled-components'
import { colors } from '../../styles/colors'
import background from '../../assets/images/background.png'
import breakpoint from '../../styles/breakpoints'

export const AuthStyled = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  height: calc(100vh - 40px);
  min-height: 800px;

  ${breakpoint.sm`
    min-height: 1100px;
    height: calc(100vh - 60px);
  `}

  ${breakpoint.md`
    min-height: 770px;
  `}
`

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 50px 30px 30px 30px;
  color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;

  ${breakpoint.md`
    grid-template-columns: 1fr 1fr;
    padding-top: 100px;
  `}
`

export const AuthTextStyled = styled.div`
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 15px;

  ${breakpoint.sm`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  `}

  h1 {
    font-size: 18px;

    ${breakpoint.sm`
      font-size: 30px;;
      text-align: center;
      margin-bottom: 20px;
    `}

    ${breakpoint.md`
      text-align: left;
      margin-bottom: 20px;
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
      width: 150px;
      height: 150px;
      margin-bottom: 40px;
    `}

    ${breakpoint.md`
      width: 300px;
      height: 300px;
    `}
  }
`

export const AuthFormStyled = styled.div`
  margin: 0 auto;
`

export const AuthIntroStyled = styled.p`
  display: none;
  ${breakpoint.sm`
    display: block;
    line-height: 1.5;
  `}
`
