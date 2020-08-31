import {
  getAllOrganizators,
  updateOrganizators,
  createOrganizator
} from '../organizators'

const token = 't0k3n5tr1ng'
const eventId = '3v3n71d'
const organizatorId = '0rg4n1z4t0r'
const mockOrganizatorData = {
  eventStatus: false,
  countDown: true,
  allowRegister: true,
  name: 'Evento JP Prueba',
  description: 'Evento de prueba de Juan Pablo.'
}

describe('Organizator Services', () => {
  describe('getAllOrganizators service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          getAllOrganizators(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllOrganizators(eventId, token).then(response => {
          expect(response).toEqual('ok')
        })
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        getAllOrganizators(eventId, token).catch(error =>
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
          getAllOrganizators(eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        getAllOrganizators(undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })

  describe('updateOrganizators service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })

      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          updateOrganizators(mockOrganizatorData, organizatorId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateOrganizators(mockOrganizatorData, organizatorId, token).then(
          response => {
            expect(response).toEqual('ok')
          }
        )
      })

      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        updateOrganizators(
          mockOrganizatorData,
          organizatorId,
          token
        ).catch(error => expect(error).toEqual(Error('Error')))
      })
    })

    describe('When organizator id is undefined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it fails with error message', () => {
        fetch.mockResponseOnce(() =>
          updateOrganizators(mockOrganizatorData, undefined, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        updateOrganizators(mockOrganizatorData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an organizator Id'))
        )
      })
    })
  })

  describe('createOrgnizator service', () => {
    describe('When event id is defined', () => {
      beforeEach(() => {
        fetch.resetMocks()
      })
      test('it returns the data', () => {
        fetch.mockResponseOnce(() =>
          createOrganizator(mockOrganizatorData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createOrganizator(mockOrganizatorData, eventId, token).then(response =>
          expect(response).toEqual('ok')
        )
      })
      test('it fails with error message', () => {
        fetch.mockReject(new Error('Error'))
        createOrganizator(mockOrganizatorData, eventId, token).catch(error =>
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
          createOrganizator(mockOrganizatorData, eventId, token)
            .then(res => res.json())
            .then(data => 'ok')
        )
        createOrganizator(mockOrganizatorData, undefined, token).catch(error =>
          expect(error).toEqual(Error('Please provide an event Id'))
        )
      })
    })
  })
})
