import React from 'react'
import { shallow } from 'enzyme'
import { TitlePage } from '../TitlePage'

describe('TitlePage Molecule', () => {
  describe('Render', () => {
    const component = shallow(<TitlePage />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
