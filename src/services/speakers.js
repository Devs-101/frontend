import { config } from '../config'

export function getAllSpeakers(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/speakers/${eventId}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function createSpeaker(speakerInfo, eventId, token) {
  if (eventId) {
    const formData = new FormData()
    Object.entries(speakerInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/speakers/${eventId}/new`, {
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function updateSpeaker(speakerInfo, speakerId, token) {
  if (speakerId) {
    const formData = new FormData()
    Object.entries(speakerInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/speakers/${speakerId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an speaker Id'))
}
