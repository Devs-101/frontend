import { getAllEvents } from '../events'

const organizationId = '0rg4niz4710n1d'
const token = 't0k3n5tr1ng'

describe('getAllEvents service', () => {
  describe('When organization id is defined', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    test('it returns the data', () => {
      fetch.mockResponseOnce(JSON.stringify({ message: 'ok' }))
      getAllEvents(organizationId, token).then(response =>
        expect(response.message).toEqual('ok')
      )
    })
    test('it fails with error message', () => {
      fetch.mockReject(Promise.reject(Error('Error')))
      getAllEvents(organizationId, token).catch(error =>
        expect(error).toEqual('Error')
      )
    })
  })
  describe('When organization id is undefined', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    test('it returns the data', () => {
      fetch.mockResponseOnce(JSON.stringify({ message: 'ok' }))
      getAllEvents(undefined, token).catch(response =>
        expect(response.message).toEqual('ok')
      )
    })
    test('it fails with error message', () => {
      fetch.mockReject(Promise.reject(Error('Error')))
      getAllEvents(undefined, token).catch(error =>
        expect(error).toEqual('Error')
      )
    })
  })
})
