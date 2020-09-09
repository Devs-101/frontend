import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const AgendaContainerStyled = styled.div`
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
  `}
`

export const AgendaFormStyled = styled.form`
  width: 90%;
  background: ${colors.grey};
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;

  ${breakpoint.md`
    width: 769px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 23px;
  `}
`

export const SubmitSection = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  margin-bottom: 50px;

  ${breakpoint.md`
    grid-column: 2 / 3;
    margin-bottom: 0;
    justify-content: flex-end;
    button{
      margin-left: 20px;
    }
  `}
`

export const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;

  ${breakpoint.md`
    text-align: left;
    padding-left: 30px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    
  `}
`
