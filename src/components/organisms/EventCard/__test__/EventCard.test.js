import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { EventCard } from '../EventCard'
import {
  EventTitle,
  EventDescription,
  EventAttendeeCounter,
  EventDate
} from '../EventCard.styes'

describe('EventCard organism', () => {
  describe('render', () => {
    const component = shallow(<EventCard />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})

describe('to have props', () => {
  const component = mount(
    <EventCard
      imageUrl="url"
      eventName="eventName"
      eventDescription="eventDescription"
      attendeeCounter="attendeeCounter"
      eventDate="eventDate"
    />
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
})
