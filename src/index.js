import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { GlobalStyles } from './styles/globalStyles'
import store from './redux/store'

const container = document.getElementById('root')

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  )
}

render(<Root />, container)
