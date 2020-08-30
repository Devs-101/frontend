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
