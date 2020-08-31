import { config } from '../config'

export function getAllEvents(organizationId, token) {
  if (organizationId) {
    return fetch(`${config.API_URL}/events/${organizationId}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an organization Id'))
}

export function createEvent(eventInfo, organizationId, token) {
  if (organizationId) {
    return fetch(`${config.API_URL}/events/${organizationId}/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(eventInfo)
    })
  }
  return Promise.reject(Error('Please provide an organization Id'))
}

export function updateEvent(eventInfo, organizationId, token) {
  if (organizationId) {
    return fetch(`${config.API_URL}/events/${organizationId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventInfo)
    })
  }
  return Promise.reject(Error('Please provide an organization Id'))
}

export function publishEvent(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/events/${eventId}/publish`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }

  return Promise.reject(Error('Please provide an event Id'))
}
