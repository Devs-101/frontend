import React from 'react'
import { mount } from 'enzyme'
import { HomeTemplate } from '../HomeTemplate'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('HomeTemplate Template', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <HomeTemplate />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
