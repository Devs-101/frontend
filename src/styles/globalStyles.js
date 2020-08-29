import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    h1, h2, h3{
      font-family: 'Montserrat', sans-serif;
    }
  }
`
