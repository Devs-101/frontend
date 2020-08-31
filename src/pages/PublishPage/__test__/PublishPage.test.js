import React from 'react'
import { shallow } from 'enzyme'
import { PublishPage } from '../PublishPage'

describe('PublishPage component', () => {
  describe('Render', () => {
    it('should render', () => {
      const component = shallow(<PublishPage />)
      expect(component.length).toBe(1)
    })
  })
})
