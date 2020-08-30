import { usersSlice } from './users'
import { eventsSlice } from './events'

export const rootReducer = {
  users: usersSlice.reducer,
  events: eventsSlice.reducer
}
