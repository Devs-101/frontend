import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBroadcast, updateBroadcast } from '../../../services'
import {
  serializeGetBroadcastResponseData,
  serializeUpdateBroadcastInfo
} from './serializeBroadcastData'

export const getBroadcastAsync = createAsyncThunk(
  'broadcasts/getBroadcast',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) eventId = window.sessionStorage.getItem('selectedEventId')
    const getBroadcastResponse = await getBroadcast(eventId, jwt)
    if (!getBroadcastResponse.ok) {
      throw Error('Error fetching broadcast')
    }
    const getBroadcastResponseData = await getBroadcastResponse.json()
    const getBroadcastResponseDataSerialized = serializeGetBroadcastResponseData(
      getBroadcastResponseData
    )

    return getBroadcastResponseDataSerialized
  }
)

export const updateBroadcastAsync = createAsyncThunk(
  'broadcasts/updateBroadcast',
  async ({ broadcastInfo, eventId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    console.log(broadcastInfo)
    const broadcastInfoSerialized = serializeUpdateBroadcastInfo(broadcastInfo)
    const updateBroadcastResponse = await updateBroadcast(
      broadcastInfoSerialized,
      eventId,
      jwt
    )
    if (!updateBroadcastResponse.ok) {
      throw Error('Error updating the broadcast')
    }
  }
)

export const saveBroadcastAsync = createAsyncThunk(
  'broadcasts/saveBroadcast',
  async ({ broadcastInfo }) => {
    const broadcastInfoSerialized = serializeUpdateBroadcastInfo(broadcastInfo)
    return broadcastInfoSerialized
  }
)

export const broadcastSlice = createSlice({
  name: 'broadcasts',
  initialState: {
    entitie: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getBroadcastAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getBroadcastAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entitie = payload
    },
    [getBroadcastAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entitie = {}
    },
    [updateBroadcastAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [updateBroadcastAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entitie = payload
    },
    [updateBroadcastAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entitie = {}
    },
    [saveBroadcastAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entitie = payload
    }
  }
})
