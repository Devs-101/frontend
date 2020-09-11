import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const AgendaCardStyled = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 30px 16px 30px 24px;
  background: ${colors.white};
  color: ${colors.primary};
  margin-bottom: 15px;
  cursor: pointer;

  figure {
    margin: auto;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      border-radius: 50%;
      height: -webkit-fill-available;
    }
  }
`
export const AgendaCardText = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  margin-left: 16px;
  row-gap: 4px;

  ${breakpoint.md`
    grid-template-columns: auto auto auto; 
    grid-template-rows: auto 1fr;
    margin-left: 50px;
    row-gap: 16px;
  `}

  p {
    grid-row: 2 / 3;
    ${breakpoint.md`
      grid-column: 1 / 4;
      grid-row: 2 / 3; 
    `}
  }
`

export const AgendaCardDate = styled.h3`
  text-align: end;
  grid-row: 3 / 4;
  font-weight: lighter;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;

  ${breakpoint.md`
      grid-column: 3 / 4;
      grid-row: 1 / 2; 
      font-weight: 600;
      font-size: 18px;
    `}
`

export const AgendaCardTitle = styled.h3`
  font-size: 18px;
`
