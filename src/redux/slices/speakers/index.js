import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllSpeakers, createSpeaker } from '../../../services'
import {
  serializeGetAllSpeakersResponseData,
  serializeCreateSpeakerInfo
} from './serializeSpeakersData'

export const getAllSpeakersAsync = createAsyncThunk(
  'speakers/getAllSpeakers',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const getAllSpeakersResponse = await getAllSpeakers(eventId, jwt)
    if (!getAllSpeakersResponse.ok) {
      throw Error('Error fetching Speakers')
    }
    const getAllSpeakersResponseData = await getAllSpeakersResponse.json()
    const getAllSpeakersResponseDataSerialized = serializeGetAllSpeakersResponseData(
      getAllSpeakersResponseData
    )

    return getAllSpeakersResponseDataSerialized
  }
)

export const createSpeakerAsync = createAsyncThunk(
  'speakers/createSpeaker',
  async ({ speakerInfo, eventId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    const speakerInfoSerialized = serializeCreateSpeakerInfo(speakerInfo)
    const createSpeakerResponse = await createSpeaker(
      speakerInfoSerialized,
      eventId,
      jwt
    )
    if (!createSpeakerResponse.ok) {
      throw Error('Error creating the speaker')
    }
  }
)

export const speakersSlice = createSlice({
  name: 'speakers',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getAllSpeakersAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getAllSpeakersAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities = payload
      state.ids = Object.keys(payload)
    },
    [getAllSpeakersAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entities = {}
      state.ids = []
    },
    [createSpeakerAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [createSpeakerAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
    }
  }
})
