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

export function getEvent(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/events/${eventId}/get`, {
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
    const formData = new FormData()
    Object.entries(eventInfo).forEach(entry => {
      if (entry[0] === 'dateHour') {
        Object.entries(entry[1]).forEach(subentry => {
          formData.append(`${entry[0]}[${subentry[0]}]`, subentry[1])
        })
      } else {
        formData.append(entry[0], entry[1])
      }
    })

    return fetch(`${config.API_URL}/events/${organizationId}/new`, {
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      body: formData
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

export function readyForPublishEvent(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/events/${eventId}/ready-for-publish`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }

  return Promise.reject(Error('Please provide an event Id'))
}

export function publishEvent(theme, eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/events/${eventId}/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({ theme })
    })
  }

  return Promise.reject(Error('Please provide an event Id'))
}
