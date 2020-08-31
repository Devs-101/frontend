import { getAllSponsors, updateSponsor, createSponsor } from '../sponsors'

const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const sponsorId = 'sp0ns0r'
const mockSponsorData = {
  eventStatus: false,
  countDown: true,
  allowRegister: true,
  name: 'Evento JP Prueba',
  description: 'Evento de prueba de Juan Pablo.'
}

describe('Sponsors Services', () => {
  describe('getAllSponsors service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getAllSponsors(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllSponsors(eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getAllSponsors(eventId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When event id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          getAllSponsors(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllSponsors(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })

  describe('updateSponsor service', () => {
    describe('When sponsor id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateSponsor(mockSponsorData, sponsorId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateSponsor(mockSponsorData, sponsorId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateSponsor(mockSponsorData, sponsorId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When sponsor id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          updateSponsor(mockSponsorData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateSponsor(mockSponsorData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an sponsor Id'))
        )
      })
    })
  })

  describe('createSponsor service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          createSponsor(mockSponsorData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createSponsor(mockSponsorData, eventId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        createSponsor(mockSponsorData, eventId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })
    describe('When event id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error', () => {
        fetch.mockResponseOnce(() =>
          createSponsor(mockSponsorData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createSponsor(mockSponsorData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })
})
