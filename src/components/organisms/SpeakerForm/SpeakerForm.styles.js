import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import formSpeaker from '../../../assets/images/formSpeaker.png'
import { colors } from '../../../styles/colors'

export const SpeakerFormStyled = styled.div`
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
  form {
    div:nth-of-type(1) {
      label {
        width: 200px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        background-image: url(${props => props.backgroundImage || formSpeaker});
      }
      input {
        display: none;
      }
    }
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
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 70px 70px 74px;
      column-gap: 20px;
      
      div:nth-of-type(2){
        grid-column: 2 / 3;
      }
      div:nth-of-type(4){
        grid-column: 2 / 3;
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
