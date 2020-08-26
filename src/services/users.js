const API_URL = process.env.API_URL

export function signupUser(userSignupData) {
  return fetch(`${API_URL}/auth/register`, {
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
