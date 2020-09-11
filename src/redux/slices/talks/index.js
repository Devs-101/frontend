import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getAllTalks,
  createTalk,
  updateTalk,
  deleteTalk
} from '../../../services'
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

export const updateTalkAsync = createAsyncThunk(
  'talks/updateTalk',
  async ({ talkInfo, talkId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!talkId) {
      talkId = window.sessionStorage.getItem('selectTalkId')
    }
    const talkInfoSerialized = serializeCreateTalkInfo(talkInfo)
    const createTalkResponse = await updateTalk(talkInfoSerialized, talkId, jwt)
    if (!createTalkResponse.ok) {
      throw Error('Error updating the talk')
    }
  }
)

export const deleteTalkAsync = createAsyncThunk(
  'talks/deleteTalk',
  async ({ talkId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!talkId) {
      talkId = window.sessionStorage.getItem('selectTalkId')
    }
    const createTalkResponse = await deleteTalk(talkId, jwt)
    if (!createTalkResponse.ok) {
      throw Error('Error deleting the talk')
    }
  }
)

export const selectedTalkAsync = createAsyncThunk(
  'talks/selectedTalk',
  async talkId => {
    return talkId
  }
)

export const talksSlice = createSlice({
  name: 'talks',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null,
    selected: false
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
    },
    [selectedTalkAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null

      if (payload) {
        window.sessionStorage.setItem('selectTalkId', payload)
        state.selected = state.entities[payload]
      } else {
        state.selected = false
      }
    }
  }
})
