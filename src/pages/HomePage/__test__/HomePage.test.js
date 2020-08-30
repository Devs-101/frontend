import React from 'react'
import { shallow, mount } from 'enzyme'
import { HomePage } from '../HomePage'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('HomePage Page', () => {
  describe('Render', () => {
    const component = shallow(
      <ProviderMock>
        <HomePage />)
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('hooks', () => {
    const useSelector = jest.fn()

    const mockAppState = {
      events: {
        ids: ['eventId'],
        entities: {
          eventId: {
            imageUrl: 'imageUrl',
            name: 'event name',
            description: 'event description',
            attendeeCounter: 12,
            eventDate: 'march 2020'
          }
        },
        loading: false,
        error: null
      },
      users: {
        organizationInfo: {
          id: ''
        },
        loading: false,
        error: null
      }
    }

    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: jest.fn()
    }))

    beforeEach(() => {
      useSelector.mockImplementation(callback => {
        return callback(mockAppState)
      })
    })
    afterEach(() => {
      useSelector.mockClear()
    })
    test('dispatch is called', () => {
      // eslint-disable-next-line no-unused-vars
      const component = mount(
        <ProviderMock>
          <HomePage />)
        </ProviderMock>
      )
    })
    /* test('to have event info', () => {
      const mockLocalState = {
        events: {
          ids: ['eventId'],
          entities: {
            eventId: {
              imageUrl: 'imageUrl',
              name: 'event name',
              description: 'event description',
              attendeeCounter: 12,
              eventDate: 'march 2020'
            }
          },
          loading: false,
          error: null
        },
        users: {
          organizationInfo: {
            id: 'saadfasdf'
          },
          loading: false,
          error: null
        }
      }
      useSelector.mockImplementation(callback => {
        return callback(mockLocalState)
      })
      const component = mount(
        <ProviderMock>
          <HomePage />)
        </ProviderMock>
      )
      expect(component.find(EventCard).length).toBe(1)
    }) */
  })
})
