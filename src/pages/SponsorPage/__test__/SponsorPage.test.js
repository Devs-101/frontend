import React from 'react'
import { shallow } from 'enzyme'
import { SponsorPage } from '../SponsorPage'

describe('SponsorPage Page', () => {
  describe('Render', () => {
    const component = shallow(<SponsorPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
