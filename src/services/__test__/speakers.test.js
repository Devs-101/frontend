import { getAllSpeakers, updateSpeaker, createSpeaker } from '../speakers'

const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const speakerId = 'sp34k3r'
const mockSpeakersData = {
  eventStatus: false,
  countDown: true,
  allowRegister: true,
  name: 'Evento JP Prueba',
  description: 'Evento de prueba de Juan Pablo.'
}

describe('Speakers Services', () => {
  describe('getAllSpeakers service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getAllSpeakers(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllSpeakers(eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getAllSpeakers(eventId, token).catch(error =>
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
          getAllSpeakers(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllSpeakers(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })

  describe('updateSpeaker service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateSpeaker(mockSpeakersData, speakerId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateSpeaker(mockSpeakersData, speakerId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateSpeaker(mockSpeakersData, speakerId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When speaker id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          updateSpeaker(mockSpeakersData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateSpeaker(mockSpeakersData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an speaker Id'))
        )
      })
    })
  })

  describe('createSpeaker service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          createSpeaker(mockSpeakersData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createSpeaker(mockSpeakersData, eventId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        createSpeaker(mockSpeakersData, eventId, token).catch(error =>
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
          createSpeaker(mockSpeakersData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createSpeaker(mockSpeakersData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })
})
