import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signupUser } from '../../services'
import { serializeSignupData } from '../../utils'

const signupThunk = createAsyncThunk(
  'users/signUp',
  async (userData, thunkApi) => {
    const userDataSerialized = serializeSignupData(userData)
    const response = await signupUser(userDataSerialized)
    return response.json()
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userInfo: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [signupThunk.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [signupThunk.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.userInfo = payload
    },
    [signupThunk.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.userInfo = {}
    }
  }
})
