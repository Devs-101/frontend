import React from 'react'
import { shallow } from 'enzyme'
import { ProviderMock } from '../../../../../__mocks__/providerMock'
import { NavBar } from '../NavBar'

describe('NavBar organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <NavBar />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
