import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import formImage from '../../../assets/images/formImage.png'
import { colors } from '../../../styles/colors'

export const FormStyled = styled.form`
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
    margin-bottom: 20px;
  }
  div:nth-of-type(2) {
    label {
      width: 200px;
      height: 200px;
      margin: 0 auto 24px;
      background-image: url(${formImage});

      ${breakpoint.md`
          grid-row: 2 / 5;
        `}
    }
    input {
      display: none;
    }
  }

  ${breakpoint.md`
    width: 769px;
    padding: 40px;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 60px 60px 40px;
    column-gap: 40px;
    row-gap: 20px;

    h2 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin: auto;
    }
      
      div:nth-of-type(4){
        grid-column: 2 / 3;
      }

  `}
`
export const SubmitSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 45px;

  ${breakpoint.md`
  margin-bottom: 0;
    grid-column: 2 / 3;
    justify-content: flex-end;
    button:nth-of-type(2){
      margin-left: 17px;
    }
  `}
`
