import { css } from 'styled-components'
import { colors } from './colors'

export const formMixin = css`
  width: 400px;
  background-color: ${colors.whiteDark};
  padding: 25px 20px 25px 30px;
  border-radius: 20px;
  h3 {
    padding: 0 30px;
    text-align: center;
  }
  button {
    display: block;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 1em;
    &:nth-of-type(2) {
      margin: 0;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
