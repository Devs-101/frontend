import { createSlice } from '@reduxjs/toolkit'

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    isOpen: false
  },
  reducers: {
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    }
  }
})

export const { open: openModal, close: closeModal } = modalsSlice.actions
