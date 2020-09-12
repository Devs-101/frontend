import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
// import { colors } from '../../styles/colors'

export const PublishPageStyled = styled.div`
  ${breakpoint.md`
    width: 1000px;
    margin: auto;
  `}
`

export const Hero = styled.div`
  width: 100%;
  height: 208px;
  position: relative;

  img {
    width: 100%;
    max-width: 410px;
    height: 100%;
    object-fit: cover;
  }

  ${breakpoint.md`
    height: 270px;

    img{
      max-width: 1200px;
    }
  `}
`

export const HeroInfo = styled.div`
  justify-content: space-around;
  font-size: 16px;
  position: absolute;
  top: 25%;
  left: 20%;

  ${breakpoint.md`
    display: flex;
    width: 100%;
    top: 75%;
    left: 0;
    justify-content: space-between;
    padding: 0 50px;

    h1{
      font-size: 30px;
    }
  `}
`

export const Time = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Content = styled.section`
  margin-top: 30px;
  padding: 20px;

  figure {
    margin-top: 15px;

    img {
      width: 100%;
      max-width: 335px;
      height: 210px;
      object-fit: cover;
    }
  }

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    figure{
      grid-column: 2 / 3;
      img {
        max-width: 500px;
      }
    }
  `}
`

export const Text = styled.div``

export const Title = styled.div`
  margin-bottom: 10px;
  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
    `}
`

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`

export const Speaker = styled.section`
  margin-top: 30px;
  text-align: center;
  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
  `}
`

export const Agenda = styled.section`
  margin-top: 30px;
  text-align: center;
  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
  `}
`

export const Sponsor = styled.section`
  margin-top: 30px;
  text-align: center;
  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
  `}
`

export const Form = styled.form`
  margin-top: 30px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  div {
    width: 90%;
    max-width: 500px;
    margin: auto;
  }

  button {
    display: block;
    margin: 20px auto;
  }

  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
  `}
`
