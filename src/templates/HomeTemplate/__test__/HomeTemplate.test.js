import React from 'react'
import { shallow } from 'enzyme'
import { HomeTemplate } from '../HomeTemplate'

describe('HomeTemplate Template', () => {
  describe('Render', () => {
    const component = shallow(<HomeTemplate />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
