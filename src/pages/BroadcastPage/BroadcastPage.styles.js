import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'
import placeholder from '../../assets/images/placeholder.png'

export const BroadcastFormStyled = styled.form`
  padding: 20px;
  z-index: 1;

  div:nth-of-type(3) {
    label {
      width: 100%;
      height: 250px;
      background-image: url(${props => props.backgroundImage || placeholder});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin: 20px 0 0 0;
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
`
