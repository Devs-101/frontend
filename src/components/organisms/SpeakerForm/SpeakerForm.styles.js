import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import formSpeaker from '../../../assets/images/formSpeaker.png'
import { colors } from '../../../styles/colors'

export const SpeakerFormStyled = styled.form`
  div:nth-of-type(1) {
    label {
      width: 200px;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      background-image: url(${props => props.backgroundImage || formSpeaker});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
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
  ${breakpoint.md`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 70px 70px 74px;
    column-gap: 20px;
    
    div:nth-of-type(1) {
      label {
        width: 200px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        background-image: url(${props => props.backgroundImage || formSpeaker});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      input {
        display: none;
      }
    }

    div:nth-of-type(2){
      grid-column: 2 / 3;
    }
    div:nth-of-type(4){
      grid-column: 2 / 3;
    }
  `}
`
