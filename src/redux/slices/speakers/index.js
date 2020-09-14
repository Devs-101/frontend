import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getAllSpeakers,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker
} from '../../../services'
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
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
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

export const updateSpeakerAsync = createAsyncThunk(
  'speakers/updateSpeaker',
  async ({ speakerInfo, speakerId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!speakerId) {
      speakerId = window.sessionStorage.getItem('selectSpeakerId')
    }
    const speakerInfoSerialized = serializeCreateSpeakerInfo(speakerInfo)
    const createSpeakerResponse = await updateSpeaker(
      speakerInfoSerialized,
      speakerId,
      jwt
    )
    if (!createSpeakerResponse.ok) {
      throw Error('Error updating the speaker')
    }
  }
)

export const deleteSpeakerAsync = createAsyncThunk(
  'speakers/deleteSpeaker',
  async ({ speakerId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!speakerId) {
      speakerId = window.sessionStorage.getItem('selectSpeakerId')
    }
    const createSpeakerResponse = await deleteSpeaker(speakerId, jwt)
    if (!createSpeakerResponse.ok) {
      throw Error('Error deleting the speaker')
    }
  }
)

export const selectedSpeakerAsync = createAsyncThunk(
  'speakers/selectedSpeaker',
  async speakerId => {
    return speakerId
  }
)

export const speakersSlice = createSlice({
  name: 'speakers',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null,
    selected: false
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
    },
    [selectedSpeakerAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null

      if (payload) {
        window.sessionStorage.setItem('selectSpeakerId', payload)
        state.selected = state.entities[payload]
      } else {
        state.selected = false
      }
    }
  }
})
