import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllEvents } from '../../../services'
import { serializeGetAllEventsResponseData } from './serializeEventsData'

export const getAllEventsAsync = createAsyncThunk(
  'events/getAllEvents',
  async organizationId => {
    const jwt = window.sessionStorage.getItem('jwt')
    const getAllEventsResponse = await getAllEvents(organizationId, jwt)
    if (!getAllEventsResponse.ok) {
      throw Error('Error fetching events')
    }
    const getAllEventsResponseData = await getAllEventsResponse.json()
    const getAllEventsResponseDataSerialized = serializeGetAllEventsResponseData(
      getAllEventsResponseData
    )

    return getAllEventsResponseDataSerialized
  }
)

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getAllEventsAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getAllEventsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities = payload
      state.ids = Object.keys(payload)
    },
    [getAllEventsAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entities = {}
      state.ids = []
    }
  }
})
