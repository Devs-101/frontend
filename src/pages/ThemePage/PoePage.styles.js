import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'
import titleUnderline from '../../assets/images/TitleUnderlineShort.png'
import buttonRegister from '../../assets/images/button_other_1080p.png'

export const PublishPageStyled = styled.div`
  width: 100%;
  background-color: ${colors.theme.poe.bg_main};
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

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 60px 20px;

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

export const Text = styled.div`
  color: ${colors.white};
`

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

export const TitleSectionsStyles = styled.h2`
  color: ${colors.theme.poe.title};
  text-align: center;
  font-size: 30px;
  outline: 1px ${colors.dark};
  padding: 10px;
  background-image: url(${titleUnderline});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position: 50% 100%;
`

export const SectionStyled = styled.section`
  background-color: ${colors.theme.poe.bg_one};
  padding: 60px 0;
`

export const Form = styled.form`
  padding: 60px 0;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: ${colors.theme.poe.title};
  }
  div {
    width: 90%;
    max-width: 500px;
    margin: auto;
  }

  button {
    display: block;
    margin: 20px auto;
    background-image: url(${buttonRegister});
    background-size: cover;
    width: 285px;
    height: 66px;
    text-align: center;
    background-color: transparent;
    padding-top: 20px;
    font-size: 24px;
    color: ${colors.theme.poe.color_button};

    &:hover {
      background-color: transparent;
      background-position-y: 49%;
    }
  }

  input {
    background: ${colors.dark};
    border: 2px solid ${colors.theme.poe.input_border};
    border-radius: 0;
  }

  ${breakpoint.md`
    h2{
      font-size: 30px;
    }
  `}
`
