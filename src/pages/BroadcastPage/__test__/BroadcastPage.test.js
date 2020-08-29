import React from 'react'
import { shallow } from 'enzyme'
import { BroadcastPage } from '../BroadcastPage'

describe('BroadcastPage page', () => {
  describe('Render', () => {
    const component = shallow(<BroadcastPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
