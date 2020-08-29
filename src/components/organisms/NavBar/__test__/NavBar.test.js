import React from 'react'
import { shallow } from 'enzyme'
import { NavBar } from '../NavBar'

describe('NavBar organism', () => {
  describe('render', () => {
    const component = shallow(<NavBar />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
