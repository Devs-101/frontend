import { css } from 'styled-components'
import { colors } from './colors'

export const formMixin = css`
  width: 500px;
  background-color: ${colors.whiteDark};
  padding: 40px 20px 40px 30px;
  border-radius: 20px;
  h3 {
    padding: 0 30px;
    text-align: center;
  }
  button {
    display: block;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 16px;
    &:nth-of-type(2) {
      cursor: pointer;
    }
  }
`
