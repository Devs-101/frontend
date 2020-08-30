import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from '../HomePage'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('HomePage Page', () => {
  describe('Render', () => {
    const component = shallow(
      <ProviderMock>
        <HomePage />)
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
})
