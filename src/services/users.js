import { config } from '../config'

export function signupUser(userSignupData) {
  return fetch(`${config.API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: userSignupData
  })
    .then(response => response.json())
    .then(data => data)
    .catch(err => err)
}
