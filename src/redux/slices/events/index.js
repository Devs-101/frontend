import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getAllEvents,
  updateEvent,
  createEvent,
  getEvent,
  readyForPublishEvent,
  publishEvent
} from '../../../services'
import {
  serializeGetAllEventsResponseData,
  serializeCreateEventInfo,
  serializeEventInfo,
  serializeReadyForPublishEventInfo
} from './serializeEventsData'

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

export const getEventAsync = createAsyncThunk(
  'events/getEvent',
  async eventId => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const getEventsResponse = await getEvent(eventId, jwt)
    if (!getEventsResponse.ok) {
      throw Error('Error fetching events')
    }
    const getEventResponseData = await getEventsResponse.json()
    const getEventResponseDataSerialized = serializeEventInfo(
      getEventResponseData
    )

    return getEventResponseDataSerialized
  }
)

export const createEventAsync = createAsyncThunk(
  'events/createEvent',
  async ({ eventInfo, organizationId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    const eventInfoSerialized = serializeCreateEventInfo(eventInfo)
    const createEventResponse = await createEvent(
      eventInfoSerialized,
      organizationId,
      jwt
    )
    if (!createEventResponse.ok) {
      throw Error('Error creating the event')
    }
  }
)

export const updateEventAsync = createAsyncThunk(
  'events/updateEvent',
  async ({ eventInfo, eventId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const eventInfoSerialized = serializeEventInfo(eventInfo)
    const createEventResponse = await updateEvent(
      eventInfoSerialized,
      eventId,
      jwt
    )
    if (!createEventResponse.ok) {
      throw Error('Error updating the event')
    }
  }
)

export const selectedEventAsync = createAsyncThunk(
  'events/selectedEvent',
  async eventId => {
    if (!eventId) {
      eventId = window.sessionStorage.getItem('selectedEventId')
    }
    const jwt = window.sessionStorage.getItem('jwt')
    const getEventsResponse = await getEvent(eventId, jwt)
    if (!getEventsResponse.ok) {
      throw Error('Error fetching the event')
    }
    const getEventResponseData = await getEventsResponse.json()
    const getEventResponseDataSerialized = serializeEventInfo(
      getEventResponseData
    )

    return getEventResponseDataSerialized
  }
)

export const readyForPublishEventAsync = createAsyncThunk(
  'events/readyForPublishEvent',
  async eventId => {
    if (!eventId) eventId = window.sessionStorage.getItem('selectedEventId')
    const jwt = window.sessionStorage.getItem('jwt')
    const getEventsResponse = await readyForPublishEvent(eventId, jwt)
    if (!getEventsResponse.ok) {
      throw Error('Error fetching the event')
    }
    const getEventResponseData = await getEventsResponse.json()
    const getEventResponseDataSerialized = serializeReadyForPublishEventInfo(
      getEventResponseData
    )

    return getEventResponseDataSerialized
  }
)

export const publishEventAsync = createAsyncThunk(
  'events/publishEvent',
  async ({ theme, eventId }) => {
    const jwt = window.sessionStorage.getItem('jwt')
    const getEventsResponse = await publishEvent(theme, eventId, jwt)
    if (!getEventsResponse.ok) {
      throw Error('Error fetching the event')
    }
    const getEventResponseData = await getEventsResponse.json()
    const getEventResponseDataSerialized = serializeEventInfo(
      getEventResponseData
    )

    return getEventResponseDataSerialized
  }
)

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    entities: {},
    ids: [],
    loading: false,
    error: null,
    selected: null,
    readyForPublish: false
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
    },
    [createEventAsync.pending]: state => {
      state.loading = true
      state.error = null
    },
    [createEventAsync.rejected]: (state, { error }) => {
      state.loading = false
      state.error = error.message
    },
    [selectedEventAsync.fulfilled]: (state, { payload }) => {
      if (payload) {
        window.sessionStorage.setItem('selectedEventId', payload._id)
      }
      state.loading = false
      state.error = null
      state.selected = state.entities[payload]
    },
    [readyForPublishEventAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.readyForPublish = payload
    },
    [publishEventAsync.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.entities[payload._id] = payload
    }
  }
})
