import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const BroadcastCardStyled = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 30px 16px 30px 24px;
  figure {
    margin: auto;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`
export const BroadcastCardText = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  margin-left: 16px;
  row-gap: 2px;
  ${breakpoint.md`
    grid-template-columns: auto auto auto; 
    grid-template-rows: auto 1fr;
  `}
  p {
    grid-row: 2 / 3;
    ${breakpoint.md`
      grid-column: 1 / 4;
      grid-row: 2 / 3; 
    `}
  }
`

export const BroadcastCardDate = styled.h3`
  text-align: end;
  grid-row: 3 / 4;
  font-weight: lighter;
  ${breakpoint.md`
      grid-column: 3 / 4;
      grid-row: 1 / 2; 
      font-weight: 600;
    `}
`

export const BroadcastCardTitle = styled.h3`
  font-size: 18px;
`
