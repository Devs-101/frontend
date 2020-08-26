import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signupUser } from '../../../services'
import {
  serializeSignupData,
  serializeSignupResponse
} from './serializeUserData'

export const signupUserAsync = createAsyncThunk(
  'users/signUp',
  async (userData, thunkApi) => {
    const userDataSerialized = serializeSignupData(userData)
    try {
      const signupResponse = await signupUser(userDataSerialized)
      const signupResponseSerialized = serializeSignupResponse(signupResponse)
      return signupResponseSerialized
    } catch (err) {
      throw Error(err)
    }
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userInfo: {
      userId: '',
      email: '',
      name: ''
    },
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [signupUserAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [signupUserAsync.fulfilled]: (state, { payload }) => {
      window.sessionStorage.setItem('jwt', payload.jwt)
      state.loading = false
      state.error = null
      state.userInfo = {
        userId: payload.userId,
        email: payload.email,
        name: payload.name
      }
    },
    [signupUserAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.userInfo = {}
    }
  }
})
