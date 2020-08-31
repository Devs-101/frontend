import { getBroadcast, updateBroadcast } from '../broadcast'

const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const mockBroadcastData = {}

describe('Broadcast Services', () => {
  describe('getBroadcast service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getBroadcast(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getBroadcast(eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getBroadcast(eventId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When organization id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          getBroadcast(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getBroadcast(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })

  describe('updateBroadcast service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateBroadcast(mockBroadcastData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateBroadcast(mockBroadcastData, eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateBroadcast(mockBroadcastData, eventId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When organization id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          updateBroadcast(mockBroadcastData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateBroadcast(mockBroadcastData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })
})
