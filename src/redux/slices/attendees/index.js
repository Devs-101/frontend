import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllAttendees, createAttendee } from '../../../services'
import {
  serializeGetAllAttendeesResponseData,
  serializeCreateAttendeeInfo
} from './serializeAttendeesData'

export const getAllAttendeesAsync = createAsyncThunk(
  'attendees/getAllAttendees',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    const getAllAttendeesResponse = await getAllAttendees(eventId, jwt)
    if (!getAllAttendeesResponse.ok) {
      throw Error('Error fetching attendees')
    }
    const getAllAttendeesResponseData = await getAllAttendeesResponse.json()
    const getAllAttendeesResponseDataSerialized = serializeGetAllAttendeesResponseData(
      getAllAttendeesResponseData
    )

    return getAllAttendeesResponseDataSerialized
  }
)

export const createAttendeesAsync = createAsyncThunk(
  'attendees/createAttendees',
  async ({ attendeeInfo, eventId }) => {
    const attendeeInfoSerialized = serializeCreateAttendeeInfo(attendeeInfo)
    const createAttendeeResponse = await createAttendee(
      attendeeInfoSerialized,
      eventId
    )
    if (!createAttendeeResponse.ok) {
      throw Error('Error creating the attendee')
    }
    const createAttendeeResponseData = await createAttendeeResponse.json()
    const createAttendeeResponseDataSerialized = serializeGetAllAttendeesResponseData(
      createAttendeeResponseData
    )

    return createAttendeeResponseDataSerialized
  }
)

export const attendeesSlice = createSlice({
  name: 'attendees',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getAllAttendeesAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getAllAttendeesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities = payload
      state.ids = Object.keys(payload)
    },
    [getAllAttendeesAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entities = {}
      state.ids = []
    },
    [createAttendeesAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [createAttendeesAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
    },
    [createAttendeesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities[payload._id] = payload
    }
  }
})
