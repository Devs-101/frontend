const BASE_API_URL = process.env.BASE_API_URL

export function signupUser(userSignupData) {
  return fetch(`${BASE_API_URL}/auth/register`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: userSignupData
  })
}
