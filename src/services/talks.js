import { config } from '../config'

export function getAllTalks(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/talks/${eventId}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function createTalk(talkInfo, eventId, token) {
  if (eventId) {
    const formData = new FormData()
    Object.entries(talkInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/talks/${eventId}/new`, {
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function updateTalk(talkInfo, talkId, token) {
  if (talkId) {
    const formData = new FormData()
    Object.entries(talkInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/talks/${talkId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an talk Id'))
}
