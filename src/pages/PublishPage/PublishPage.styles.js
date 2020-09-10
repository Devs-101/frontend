import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import colors from '../../styles/colors'

export const Hero = styled.div`
  position: relative;
  width: 410px;
  img {
    width: 100%;
    /* height: auto; */
    height: 208px;
    object-fit: cover;
    position: absolute;
  }

  ${breakpoint.md`
    width: 900px;
    height: 270px;
  `}
`

export const HeroInfo = styled.div`
  position: absolute;
  justify-content: space-around;
  font-size: 16px;
  top: 50%;
  left: 0%;
`

export const Time = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
