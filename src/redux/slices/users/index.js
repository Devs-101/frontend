import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signupUser, loginUser, verifyUser } from '../../../services'
import {
  serializeSignupData,
  serializeSignupResponse,
  serializeVerifyUserResponse
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

export const loginUserAsync = createAsyncThunk(
  'users/login',
  async (userLoginData, thunkApi) => {
    const loginResponse = await loginUser(userLoginData)
    if (loginResponse.status === 403) {
      const { errors } = await loginResponse.json()
      throw errors[0].msg
    }
    if (loginResponse.status === 401) {
      const { error } = await loginResponse.json()
      throw Error(error)
    }
    const loginResponseData = await loginResponse.json()

    return loginResponseData.data
  }
)

export const verifyUserAsync = createAsyncThunk(
  'users/verify',
  async (token, thunkApi) => {
    const verifyUserResponse = await verifyUser(token)
    if (!verifyUserResponse.ok) {
      throw Error('An error has occurred. Please try again')
    }
    const verifyUserResponseData = await verifyUserResponse.json()
    const verifyUserResponseDataSerialized = serializeVerifyUserResponse(
      verifyUserResponseData
    )
    return verifyUserResponseDataSerialized
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
    },
    [loginUserAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [loginUserAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
    },
    [loginUserAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.userInfo = {}
    },
    [verifyUserAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [verifyUserAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.userInfo = {
        userId: payload.userId,
        email: payload.email,
        name: payload.name
      }
    },
    [verifyUserAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.userInfo = {}
    }
  }
})
