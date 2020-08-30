import { getAllEvents, createEvent, updateEvent, publishEvent } from '../events'

const organizationId = '0rg4niz4710n1d'
const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const mockEventData = {
  eventStatus: false,
  countDown: true,
  allowRegister: true,
  name: 'Evento JP Prueba',
  description: 'Evento de prueba de Juan Pablo.',
  dateHour: {
    initDate: '2020-08-30T20:30:00.000Z',
    endDate: '2020-08-30T23:30:00.000Z'
  },
  theme: 'omnitrix',
  slug: 'super-slug-jpevent-1',
  fullUrl: 'fullUrl',
  organizators: []
}

describe('Events services', () => {
  describe('getAllEvents service', () => {
    describe('When organization id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getAllEvents(organizationId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllEvents(organizationId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getAllEvents(organizationId, token).catch(error =>
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
          getAllEvents(organizationId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllEvents(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an organization Id'))
        )
      })
    })
  })
  describe('createEvent service', () => {
    describe('When organization id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          createEvent(mockEventData, organizationId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createEvent(mockEventData, organizationId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        createEvent(mockEventData, organizationId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })
    describe('When organization id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error', () => {
        fetch.mockResponseOnce(() =>
          createEvent(mockEventData, organizationId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createEvent(mockEventData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an organization Id'))
        )
      })
    })
  })
  describe('updateEvent service', () => {
    describe('When organization id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateEvent(mockEventData, organizationId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateEvent(mockEventData, organizationId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateEvent(mockEventData, organizationId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })
    describe('When organization id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with an error', () => {
        fetch.mockResponseOnce(() =>
          updateEvent(mockEventData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateEvent(mockEventData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an organization Id'))
        )
      })
    })
  })
  describe('publishEvent service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          publishEvent(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        publishEvent(eventId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateEvent(eventId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })
    describe('When event id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with an error', () => {
        fetch.mockResponseOnce(() =>
          publishEvent(undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        publishEvent(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an organization Id'))
        )
      })
    })
  })
})
