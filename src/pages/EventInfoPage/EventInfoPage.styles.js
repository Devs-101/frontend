import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const EventInfoStyled = styled.form`
  background-color: ${colors.grey};
`

export const Container = styled.div`
  padding: 24px;

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 25px;

    div:nth-of-type(1){
      grid-column: 1 / 3;
    }
    
    div:nth-of-type(2){
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    
    div:nth-of-type(3){
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
  `}
`
export const AgendaTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  box-shadow: 0px 3px 6px #00000029;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    box-shadow: none;
    padding: 0;

    h3 {
    font-size: 24px;
  }
  `}
`
