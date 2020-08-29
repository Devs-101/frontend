import { config } from '../config'

export function signupUser(userSignupData) {
  return fetch(`${config.API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userSignupData)
  })
}

export function loginUser(userLoginData) {
  return fetch(`${config.API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userLoginData)
  })
}

export function verifyUser(token) {
  return fetch(`${config.API_URL}/auth/me`, {
    method: 'POST',
    headers: {
      'x-access-token': token
    }
  })
}
