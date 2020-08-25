import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './styles/globalStyles'

const container = document.getElementById('root')

function Root() {
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  )
}

render(<Root />, container)
