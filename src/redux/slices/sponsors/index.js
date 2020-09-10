import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getAllSponsors,
  updateSponsor,
  createSponsor,
  deleteSponsor
} from '../../../services'
import {
  serializeGetAllSponsorsResponseData,
  serializeCreateSponsorInfo
} from './serializeSponsorsData'

export const getAllSponsorsAsync = createAsyncThunk(
  'sponsors/getAllSponsors',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const getAllSponsorsResponse = await getAllSponsors(eventId, jwt)
    if (!getAllSponsorsResponse.ok) {
      throw Error('Error fetching Sponsors')
    }
    const getAllSponsorsResponseData = await getAllSponsorsResponse.json()
    const getAllSponsorsResponseDataSerialized = serializeGetAllSponsorsResponseData(
      getAllSponsorsResponseData
    )

    return getAllSponsorsResponseDataSerialized
  }
)

export const createSponsorAsync = createAsyncThunk(
  'sponsors/createSponsor',
  async ({ sponsorInfo, eventId }) => {
    console.log('createSponsorAsync', sponsorInfo)
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const sponsorInfoSerialized = serializeCreateSponsorInfo(sponsorInfo)
    const createSponsorResponse = await createSponsor(
      sponsorInfoSerialized,
      eventId,
      jwt
    )
    if (!createSponsorResponse.ok) {
      throw Error('Error creating the sponsor')
    }
  }
)

export const updateSponsorAsync = createAsyncThunk(
  'sponsors/updateSponsor',
  async ({ sponsorInfo, sponsorId }) => {
    console.log('createSponsorAsync', sponsorInfo)
    const jwt = window.sessionStorage.getItem('jwt')
    if (!sponsorId) {
      sponsorId = window.sessionStorage.getItem('selectSponsorId')
    }
    const sponsorInfoSerialized = serializeCreateSponsorInfo(sponsorInfo)
    const createSponsorResponse = await updateSponsor(
      sponsorInfoSerialized,
      sponsorId,
      jwt
    )
    if (!createSponsorResponse.ok) {
      throw Error('Error updating the sponsor')
    }
  }
)

export const deleteSponsorAsync = createAsyncThunk(
  'sponsors/deleteSponsor',
  async ({ sponsorId }) => {
    console.log('deleteSponsorAsync', sponsorId)
    const jwt = window.sessionStorage.getItem('jwt')
    if (!sponsorId) {
      sponsorId = window.sessionStorage.getItem('selectSponsorId')
    }
    const createSponsorResponse = await deleteSponsor(sponsorId, jwt)
    if (!createSponsorResponse.ok) {
      throw Error('Error deleting the sponsor')
    }
  }
)

export const selectedSponsorAsync = createAsyncThunk(
  'sponsors/selectedSponsor',
  async sponsorId => {
    return sponsorId
  }
)

export const sponsorsSlice = createSlice({
  name: 'Sponsors',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null,
    selected: false
  },
  reducers: {},
  extraReducers: {
    [getAllSponsorsAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getAllSponsorsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities = payload
      state.ids = Object.keys(payload)
    },
    [getAllSponsorsAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
      state.entities = {}
      state.ids = []
    },
    [createSponsorAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [createSponsorAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
    },
    [selectedSponsorAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null

      if (payload) {
        window.sessionStorage.setItem('selectSponsorId', payload)
        state.selected = state.entities[payload]
      } else {
        state.selected = false
      }
    }
  }
})
