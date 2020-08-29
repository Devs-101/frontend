import React from 'react'
import { shallow } from 'enzyme'
import { EventInfoPage } from '../EventInfoPage'

describe('EventInfo page', () => {
  describe('Render', () => {
    const component = shallow(<EventInfoPage />)
    it('Is expecte to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
