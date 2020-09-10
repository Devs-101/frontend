import { config } from '../config'

export function getAllSponsors(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/sponsors/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function createSponsor(sponsorInfo, eventId, token) {
  if (eventId) {
    const formData = new FormData()
    Object.entries(sponsorInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    console.log('formData::', formData)
    console.log('createSponsor::', sponsorInfo)

    return fetch(`${config.API_URL}/sponsors/${eventId}/new`, {
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function updateSponsor(sponsorInfo, sponsorId, token) {
  if (sponsorId) {
    const formData = new FormData()
    Object.entries(sponsorInfo).forEach(entry =>
      formData.append(entry[0], entry[1])
    )

    console.log('formData::', formData)
    console.log('createSponsor::', sponsorInfo)

    return fetch(`${config.API_URL}/sponsors/${sponsorId}/update`, {
      method: 'PUT',
      headers: {
        'x-access-token': token
      },
      body: formData
    })
  }
  return Promise.reject(Error('Please provide an sponsor Id'))
}

export function deleteSponsor(sponsorId, token) {
  if (sponsorId) {
    return fetch(`${config.API_URL}/sponsors/${sponsorId}/delete`, {
      method: 'DELETE',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an sponsor Id'))
}
