import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
