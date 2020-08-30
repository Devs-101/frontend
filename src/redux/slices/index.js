import { usersSlice } from './users'
import { eventsSlice } from './events'
import { modalsSlice } from './modals'

export const rootReducer = {
  users: usersSlice.reducer,
  events: eventsSlice.reducer,
  modals: modalsSlice.reducer
}
