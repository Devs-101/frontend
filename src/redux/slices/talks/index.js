import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllTalks, createTalk } from '../../../services'
import {
  serializeGetAllTalksResponseData,
  serializeCreateTalkInfo
} from './serializeTalksData'

export const getAllTalksAsync = createAsyncThunk(
  'talks/getAllTalks',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const getAllTalksResponse = await getAllTalks(eventId, jwt)
    if (!getAllTalksResponse.ok) {
      throw Error('Error fetching Talks')
    }
    const getAllTalksResponseData = await getAllTalksResponse.json()
    const getAllTalksResponseDataSerialized = serializeGetAllTalksResponseData(
      getAllTalksResponseData
    )

    return getAllTalksResponseDataSerialized
  }
)

export const createTalkAsync = createAsyncThunk(
  'talks/createTalks',
  async ({ talkInfo, eventId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    const talkInfoSerialized = serializeCreateTalkInfo(talkInfo)
    const createTalkResponse = await createTalk(
      talkInfoSerialized,
      eventId,
      jwt
    )
    if (!createTalkResponse.ok) {
      throw Error('Error creating the talk')
    }
  }
)

export const talksSlice = createSlice({
  name: 'talks',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getAllTalksAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getAllTalksAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities = payload
      state.ids = Object.keys(payload)
    },
    [getAllTalksAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entities = {}
      state.ids = []
    },
    [createTalkAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [createTalkAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
    }
  }
})
