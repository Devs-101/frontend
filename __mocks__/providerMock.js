import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { rootReducer } from '../src/redux/slices'

export const mockStore = configureStore({
  reducer: rootReducer
})
const history = createBrowserHistory()

export const ProviderMock = ({ children }) => (
  <Provider store={mockStore}>
    <Router history={history}>{children}</Router>
  </Provider>
)
