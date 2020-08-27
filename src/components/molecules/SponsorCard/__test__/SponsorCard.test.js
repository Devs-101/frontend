import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { SponsorCard } from '../SponsorCard'

describe('SponsorCard Molecule', () => {
  describe('render', () => {
    const component = shallow(<SponsorCard />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <SponsorCard logoUrl="url" name="name" webSiteUrl="web" />
    )
    it('Is expected to have image sponsor', () => {
      expect(component.find('img').prop('src')).toBe('url')
    })
    it('Is expected to have name sponsor', () => {
      expect(component.find('h2').text()).toBe('name')
    })
    it('Is expected to have web sponsor', () => {
      expect(component.find('p').text()).toBe('web')
    })
  })
})
