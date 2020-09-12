import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'
import placeholder from '../../assets/images/placeholder.png'

export const BroadcastPageStyled = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  background-color: ${colors.grey};
  max-width: 100%;
`

export const BroadcastFomrStyled = styled.form`
  background: ${colors.grey};
  padding: 20px;
  z-index: 1;

  div:nth-of-type(3) {
    label {
      height: 130px;
      margin-left: auto;
      margin-right: auto;
      background-image: url(${props => props.backgroundImage || placeholder});
      background-repeat: no-repeat;
      background-size: contain;
    }
    input {
      display: none;
    }
  }
`

export const BroadcastTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
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
