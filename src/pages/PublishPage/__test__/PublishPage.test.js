import React from 'react'
import { mount } from 'enzyme'
import { PublishPage } from '../PublishPage'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('PublishPage component', () => {
  describe('Render', () => {
    it('should render', () => {
      const component = mount(
        <ProviderMock>
          <PublishPage />
        </ProviderMock>
      )

      expect(component.length).toBe(1)
    })
  })
})
