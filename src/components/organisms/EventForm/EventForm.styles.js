import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const EventFormStyled = styled.div`
  padding: 25px;
  h2 {
    text-align: center;
  }
  ${breakpoint.md`
    width: 769px;
    heigth: 413px;
    padding: 40px;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    h2 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin: auto;
    }
    form {
      grid-column: 1 / 3;
      display: grid;
      
      div:nth-of-type(1){
        border: 1px solid red;
        grid-column: 1 / 2;
      }
    }
  `}
`
export const SubmitSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  ${breakpoint.md`
  margin-bottom: 0;
    grid-column: 2 / 3;
    justify-content: flex-end;
    button:nth-of-type(2){
      margin-left: 17px;
    }
  `}
`
