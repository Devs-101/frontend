import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const EventInfoStyled = styled.div`
  background-color: ${colors.grey};
  ${breakpoint.md`
    border-radius: 4px;
  `}
`

export const Container = styled.form`
  padding: 24px;

  div:nth-of-type(6),
  div:nth-of-type(8) {
    label {
      display: block;
      height: 200px;
      width: 100%;
      border-radius: 10px;
      border: 5px dashed ${colors.darkGrey};
      text-align: center;
      line-height: 200px;
    }

    input {
      display: none;
    }
  }

  div:nth-of-type(8) {
    label {
      height: 170px;
      line-height: 170px;
    }
  }

  div:nth-of-type(7) {
    textarea {
      height: 135px;
    }
  }

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;

    div:nth-of-type(1),
    div:nth-of-type(5),
    div:nth-of-type(6) {
      grid-column: 1 / 3;
    }
    
    div:nth-of-type(2),
    div:nth-of-type(4) {
      grid-column: 1 / 2;
    }
    
    div:nth-of-type(3){
      grid-column: 2 / 3;
    }
  `};
`
export const AgendaTitle = styled.div`
  display: flex;
  justify-content: space-between;
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
