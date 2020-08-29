import React from 'react'
import { shallow } from 'enzyme'
import { SpeakerPage } from '../SpeakerPage'

describe('SpeakerPage Page', () => {
  describe('Render', () => {
    const component = shallow(<SpeakerPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
