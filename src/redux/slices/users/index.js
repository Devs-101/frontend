import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signupUser, loginUser, verifyUser } from '../../../services'
import {
  serializeSignupData,
  serializeSignupResponse,
  serializeLoginResponse,
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
    const loginResponseDataSerialized = serializeLoginResponse(
      loginResponseData
    )

    return loginResponseDataSerialized
  }
)

export const verifyUserAsync = createAsyncThunk('users/verify', async () => {
  const jwt = window.sessionStorage.getItem('jwt')
  const verifyUserResponse = await verifyUser(jwt)

  if (!verifyUserResponse.ok) {
    throw Error('An error has occurred. Please try again')
  }
  const verifyUserResponseData = await verifyUserResponse.json()
  const verifyUserResponseDataSerialized = serializeVerifyUserResponse(
    verifyUserResponseData,
    jwt
  )
  return verifyUserResponseDataSerialized
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userInfo: {
      jwt: '',
      userId: '',
      email: '',
      name: ''
    },
    organizationInfo: {
      id: '',
      name: '',
      slug: ''
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
      window.sessionStorage.setItem('jwt', payload.userInfo.jwt)
      state.loading = false
      state.error = null
      state.userInfo = payload.userInfo
      state.organizationInfo = payload.organizationInfo
    },
    [signupUserAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.userInfo = {}
      state.organizationInfo = {}
    },
    [loginUserAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [loginUserAsync.fulfilled]: (state, { payload }) => {
      window.sessionStorage.setItem('jwt', payload)
      state.loading = false
      state.error = null
      state.userInfo.jwt = payload
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
      state.userInfo = payload.userInfo
      state.organizationInfo = payload.organizationInfo
    },
    [verifyUserAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.userInfo = {}
    }
  }
})
