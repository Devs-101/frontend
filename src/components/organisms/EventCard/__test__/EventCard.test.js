import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { ProviderMock } from '../../../../../__mocks__/providerMock'
import { EventCard } from '../EventCard'
import {
  EventCardStyled,
  EventTitle,
  EventDescription,
  EventAttendeeCounter,
  EventDate
} from '../EventCard.styles'

describe('EventCard organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <EventCard />
      </ProviderMock>
    )
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})

describe('to have props', () => {
  const component = mount(
    <ProviderMock>
      <EventCard
        imageUrl="url"
        eventName="eventName"
        eventDescription="eventDescription"
        attendeeCounter="attendeeCounter"
        eventDate="eventDate"
      />
    </ProviderMock>
  )
  it('Is expected to have image Conference image', () => {
    expect(component.find('img').prop('src')).toBe('url')
  })
  it('is expected to have eventName', () => {
    expect(component.find(EventTitle).text()).toBe('eventName')
  })
  it('is expected to have eventDescription', () => {
    expect(component.find(EventDescription).text()).toBe('eventDescription')
  })

  it('is expected to have attendeeCounter', () => {
    expect(component.find(EventAttendeeCounter).text()).toBe('attendeeCounter')
  })

  it('is expected to have eventDate', () => {
    expect(component.find(EventDate).text()).toBe('eventDate')
  })
  describe('Events', () => {
    test('handleClick', () => {
      const component = mount(
        <ProviderMock>
          <EventCard
            eventName="eventName"
            eventDescription="eventDescription"
            attendeeCounter="attendeeCounter"
            eventDate="eventDate"
          />
        </ProviderMock>
      )
      const eventCardStyled = component.find(EventCardStyled)
      eventCardStyled.simulate('click')
    })
  })
})
