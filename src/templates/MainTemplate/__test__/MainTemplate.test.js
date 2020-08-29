import React from 'react'
import { shallow } from 'enzyme'
import { MainTemplate } from '../MainTemplate'

describe('MainTemplate template ', () => {
  describe('Render', () => {
    const component = shallow(<MainTemplate />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
