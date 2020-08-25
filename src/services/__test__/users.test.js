import { signupUser } from '../users'

const signupDataRequestBody = {
  email: 'yourname@gmail.com',
  password: '123456',
  confirm_password: '123456',
  user_name: 'Me Name Here',
  organization_name: 'Devs 101'
}

describe('Users services', () => {
  describe('signupUser', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    it('is expected to return the data', () => {
      fetch.mockResponseOnce(JSON.stringify({ message: 'ok' }))
      signupUser(signupDataRequestBody).then(response => {
        expect(response.message).toEqual('ok')
      })
    })
    it('is expected to fail with error', () => {
      fetch.mockReject(Promise.reject(Error('Error')))
      signupUser(signupDataRequestBody).catch(error => {
        expect(error).toEqual('Error')
      })
    })
  })
})
