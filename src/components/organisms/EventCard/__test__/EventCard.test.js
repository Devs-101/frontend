import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { EventCard } from '../EventCard'
import { EventCardImg } from '../EventCard.styes'

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
      url="url"
      eventName="eventName"
      eventDescription="eventDescription"
      attendeeCounter="attendeeCounter"
      eventDate="eventDate"
    />
  )
  it('is expected to have url', () => {
    expect(component.find(EventCardImg)).toHaveStyleRule(
      'background-image',
      'url(url)'
    )
  })
  it('is expected to have eventName', () => {
    expect(component.find('h3').text()).toBe('eventName')
  })
  it('is expected to have eventDescription', () => {
    expect(component.find('p').text()).toBe('eventDescription')
  })

  it('is expected to have attendeeCounter', () => {
    expect(component.find('p').text()).toBe('attendeeCounter')
  })

  it('is expected to have eventDate', () => {
    expect(component.find('p').text()).toBe('eventDate')
  })
})
