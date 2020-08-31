import { config } from '../config'

export function getAllOrganizators(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/organizators/${eventId}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function createOrganizator(organizatorInfo, eventId, token) {
  if (eventId) {
    const formData = new FormData()
    Object.entries(organizatorInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/organizators/${eventId}/new`, {
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function updateOrganizators(organizatorInfo, organizatorId, token) {
  if (organizatorId) {
    const formData = new FormData()
    Object.entries(organizatorInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    return fetch(`${config.API_URL}/organizators/${organizatorId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an organizator Id'))
}
