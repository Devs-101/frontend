import React from 'react'
import { shallow } from 'enzyme'
import { AgendaPage } from '../AgendaPage'

describe('AgendaPage Page', () => {
  describe('Render', () => {
    const component = shallow(<AgendaPage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
