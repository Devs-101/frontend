import React from 'react'
import { shallow, mount } from 'enzyme'
import { BroadcastCard } from '../BroadcastCard'
import { BroadcastCardDate, BroadcastCardTitle } from '../BroadcastCard.styles'
import { Icon } from '../../../atoms'

describe('BroadcastCard organism', () => {
  describe('render', () => {
    const component = shallow(<BroadcastCard />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
    describe('To have props', () => {
      const component = mount(
        <BroadcastCard
          avatar="img"
          date="date"
          title="title"
          message="message"
        />
      )
      it('Is expect to have Icon component', () => {
        expect(component.find(Icon).length).toBe(1)
      })
      it('Is expect to have title', () => {
        expect(component.find(BroadcastCardTitle).text()).toBe('title')
      })
      it('Is expect to have date', () => {
        expect(component.find(BroadcastCardDate).text()).toBe('date')
      })
      it('Is expect to have message', () => {
        expect(component.find('p').text()).toBe('message')
      })
    })
  })
})
