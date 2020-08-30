import React from 'react'
import { shallow, mount } from 'enzyme'
import { SpeakerForm } from '../SpeakerForm'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('SpeakerForm Organism', () => {
  describe('render', () => {
    const component = shallow(<SpeakerForm />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(<SpeakerForm />)
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Speaker')
    })
    it('Is epected to have 5 FormField', () => {
      expect(component.find(FormField).length).toBe(5)
    })
  })
})
