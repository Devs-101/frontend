import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'
import placeholder from '../../../assets/images/placeholder.png'

export const BroadcastFomrStyled = styled.form`
  width: 90%;
  background: ${colors.grey};
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;

  div:nth-of-type(2) {
    ${breakpoint.md`
      grid-column: 1 / 3;
    `}
  }

  div:nth-of-type(3) {
    ${breakpoint.md`
      grid-column: 1 / 3;
    `}
  }

  div:nth-of-type(4) {
    label {
      height: 130px;
      margin-left: auto;
      margin-right: auto;
      background-image: url(${placeholder});
      background-repeat: no-repeat;
      background-size: contain;
    }
    input {
      display: none;
    }
  }

  ${breakpoint.md`
    width: 769px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
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
