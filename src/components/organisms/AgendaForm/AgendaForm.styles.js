import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const AgendaFomrStyled = styled.form`
  padding: 24px;
  background-color: #f0f0f0;

  ${breakpoint.md`
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
