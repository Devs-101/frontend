import React from 'react'
import { shallow } from 'enzyme'
import { AccountPage } from '../AccountPage'

describe('HomePage Page', () => {
  describe('Render', () => {
    const component = shallow(<AccountPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
