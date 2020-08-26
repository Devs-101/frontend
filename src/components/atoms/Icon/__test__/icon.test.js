import React from 'react'
import { shallow } from 'enzyme'
import { Icon } from '../Icon'

describe('Icon atom', () => {
  describe('render', () => {
    const component = shallow(<Icon />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
