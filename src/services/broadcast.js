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
    const formData = new FormData()
    Object.entries(broadcastInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/broadcast/${eventId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}
