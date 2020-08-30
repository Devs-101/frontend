import { signupUser, loginUser, verifyUser } from '../users'

const signupDataRequestBody = {
  email: 'yourname@gmail.com',
  password: '123456',
  confirm_password: '123456',
  name: 'Me Name Here',
  organization_name: 'Devs 101'
}

const loginDataRequestBody = {
  email: 'yourname@gmail.com',
  password: '123456'
}

const verifyUserToken = 't0k3n5tr1ng'

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
  describe('loginUser', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    it('is expected to return the data', () => {
      fetch.mockResponseOnce(JSON.stringify({ message: 'ok' }))
      loginUser(loginDataRequestBody).then(response => {
        expect(response.message).toEqual('ok')
      })
    })
    it('is expected to fail with error', () => {
      fetch.mockReject(Promise.reject(Error('Error')))
      loginUser(loginDataRequestBody).catch(error => {
        expect(error).toEqual('Error')
      })
    })
  })
  describe('verifyUser', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    it('is expected to return the data', () => {
      fetch.mockResponseOnce(JSON.stringify({ message: 'ok' }))
      verifyUser(verifyUserToken).then(response => {
        expect(response.message).toEqual('ok')
      })
    })
    it('is expected to fail with error', () => {
      fetch.mockReject(Promise.reject(Error('Error')))
      verifyUser(verifyUserToken).catch(error => {
        expect(error).toEqual('Error')
      })
    })
  })
})
