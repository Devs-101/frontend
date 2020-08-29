import React from 'react'
import { shallow } from 'enzyme'
import { EventInfo } from '../EventInfo'

describe('EventInfo page', () => {
  describe('Render', () => {
    const component = shallow(<EventInfo />)
    it('Is expecte to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
