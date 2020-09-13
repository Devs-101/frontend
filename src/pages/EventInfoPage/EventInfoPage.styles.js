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

  div:nth-of-type(7),
  div:nth-of-type(9) {
    label {
      display: block;
      height: 200px;
      width: 100%;
      border-radius: 10px;
      border: 5px dashed ${colors.darkGrey};
      text-align: center;
      line-height: 200px;
      cursor: pointer;

      &:hover {
        border-color: ${colors.primary};
      }
    }

    input {
      display: none;
    }
  }

  div:nth-of-type(7) {
    label {
      background-image: url(${props => props.banerImage || 'none'});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  div:nth-of-type(9) {
    label {
      height: 170px;
      line-height: 170px;
      background-image: url(${props => props.eventImage || 'none'});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  div:nth-of-type(8) {
    textarea {
      height: 135px;
    }
  }

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;

    div:nth-of-type(6),
    div:nth-of-type(7) {
      grid-column: 1 / 3;
    }

    div:nth-of-type(1),    
    div:nth-of-type(3),
    div:nth-of-type(5) {
      grid-column: 1 / 2;
    }
    
    div:nth-of-type(2),
    div:nth-of-type(4){
      grid-column: 2 / 3;
    }
  `};
`
