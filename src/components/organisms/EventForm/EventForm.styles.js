import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const EventFormStyled = styled.div`
  width: 90%;
  background: ${colors.grey};
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;

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
        grid-column: 1 / 2;
      }
    }
  `}
`
export const SubmitSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  ${breakpoint.md`
  margin-bottom: 0;
    grid-column: 2 / 3;
    justify-content: flex-end;
    button:nth-of-type(2){
      margin-left: 17px;
    }
  `}
`
