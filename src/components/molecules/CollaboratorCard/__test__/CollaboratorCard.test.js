import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { CollaboratorCard } from '../CollaboratorCard'

describe('CollaboratorCard organism', () => {
  describe('render', () => {
    const component = shallow(<CollaboratorCard />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})

describe('to have props', () => {
  const component = mount(
    <CollaboratorCard name="name" imageUrl="url" userType="userType" />
  )
  it('Is expected to have image sponsor', () => {
    expect(component.find('img').prop('src')).toBe('url')
  })
  it('is expected to have name', () => {
    expect(component.find('h3').text()).toBe('name')
  })
  it('is expected to have userType', () => {
    expect(component.find('p').text()).toBe('userType')
  })
})
