import React from 'react'
import { shallow, mount } from 'enzyme'
import { SponsorForm } from '../SponsorForm'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('SponsorForm Organism', () => {
  describe('render', () => {
    const component = shallow(<SponsorForm />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(<SponsorForm />)
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Sponsor')
    })
    it('Is epected to have 3 FormField', () => {
      expect(component.find(FormField).length).toBe(3)
    })
  })
})
