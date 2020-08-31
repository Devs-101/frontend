import React from 'react'
import { mount } from 'enzyme'
import { ProviderMock } from '../../../../../__mocks__/providerMock'
import { NavBar } from '../NavBar'

describe('NavBar organism', () => {
  describe('render', () => {
    const component = mount(
      <ProviderMock>
        <NavBar />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
