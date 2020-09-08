import React from 'react'
import { mount } from 'enzyme'
import { BroadcastPage } from '../BroadcastPage'
import { ProviderMock, mockStore } from '../../../../__mocks__/providerMock'
import { BroadcastTitle } from '../BroadcastPage.styles'
import { Button } from '../../../components/atoms'

describe('BroadcastPage page', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <BroadcastPage />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })

  describe('Handle open modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <BroadcastPage />
      </ProviderMock>
    )
    test('run handleOpenModal', () => {
      component.find(BroadcastTitle).find(Button).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
