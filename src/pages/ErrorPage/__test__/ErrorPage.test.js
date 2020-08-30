import React from 'react'
import { shallow } from 'enzyme'
import { ErrorPage } from '../ErrorPage'

describe('ErrorPage Page', () => {
  describe('Render', () => {
    const component = shallow(<ErrorPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
