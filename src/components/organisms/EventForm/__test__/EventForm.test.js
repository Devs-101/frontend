import React from 'react'
import { shallow, mount } from 'enzyme'
import { EventForm } from '../EventForm'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('EventForm Organism', () => {
  describe('render', () => {
    const component = shallow(<EventForm />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(<EventForm />)
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Event')
    })
    it('Is epected to have 2 FormField', () => {
      expect(component.find(FormField).length).toBe(2)
    })
  })
})
