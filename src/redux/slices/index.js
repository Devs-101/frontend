import { usersSlice } from './users'
import { eventsSlice } from './events'
import { modalsSlice } from './modals'
import { speakersSlice } from './speakers'
import { talksSlice } from './talks'
import { sponsorsSlice } from './sponsors'

export const rootReducer = {
  users: usersSlice.reducer,
  events: eventsSlice.reducer,
  modals: modalsSlice.reducer,
  speakers: speakersSlice.reducer,
  talks: talksSlice.reducer,
  sponsors: sponsorsSlice.reducer
}
