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
    const signupResponse = await signupUser(userDataSerialized)
    if (signupResponse.status === 409) {
      const { errors } = await signupResponse.json()
      throw errors[0].msg
    }
    if (signupResponse.status === 422) {
      throw Error('Some fields are incomplete')
    }
    const signupResponseData = await signupResponse.json()
    const signupResponseDataSerialized = serializeSignupResponse(
      signupResponseData
    )
    return signupResponseDataSerialized
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
