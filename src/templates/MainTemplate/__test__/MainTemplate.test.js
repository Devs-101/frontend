import React from 'react'
import { mount } from 'enzyme'
import { MainTemplate } from '../MainTemplate'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('MainTemplate template ', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <MainTemplate />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
