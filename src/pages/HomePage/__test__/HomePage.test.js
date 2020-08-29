import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from '../HomePage'

describe('HomePage Page', () => {
  describe('Render', () => {
    const component = shallow(<HomePage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
