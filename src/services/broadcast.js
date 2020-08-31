import { config } from '../config'

export function getBroadcast(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/broadcast/${eventId}/get`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function updateBroadcast(broadcastInfo, eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/broadcast/${eventId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: JSON.stringify(broadcastInfo)
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}
