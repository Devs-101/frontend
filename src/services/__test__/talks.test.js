import { getAllTalks, updateTalk, createTalk } from '../talks'

const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const talkId = 't4lk'
const mockTalkData = {
  eventStatus: false,
  countDown: true,
  allowRegister: true,
  name: 'Evento JP Prueba',
  description: 'Evento de prueba de Juan Pablo.'
}

describe('Talks Services', () => {
  describe('getAllTalks service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getAllTalks(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllTalks(eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getAllTalks(eventId, token).catch(error =>
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
          getAllTalks(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllTalks(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })

  describe('updateTalk service', () => {
    describe('When talk id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateTalk(mockTalkData, talkId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateTalk(mockTalkData, talkId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateTalk(mockTalkData, talkId, token).catch(error =>
          expect(error).toEqual(Error('Error'))
        )
      })
    })

    describe('When talk id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          updateTalk(mockTalkData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateTalk(mockTalkData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an talk Id'))
        )
      })
    })
  })

  describe('createTalk service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          createTalk(mockTalkData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createTalk(mockTalkData, eventId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        createTalk(mockTalkData, eventId, token).catch(error =>
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
          createTalk(mockTalkData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createTalk(mockTalkData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })
})
