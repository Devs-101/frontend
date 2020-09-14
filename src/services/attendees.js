import { config } from '../config'

export function getAllAttendees(eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/attendees/${eventId}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}

export function createAttendee(attendee, eventId, token) {
  if (eventId) {
    return fetch(`${config.API_URL}/attendees/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attendee)
    })
  }
  return Promise.reject(Error('Please provide an event Id'))
}
