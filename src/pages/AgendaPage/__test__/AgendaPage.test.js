import React from 'react'
import { mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../__mocks__/providerMock'
import { AgendaPage } from '../AgendaPage'
import { AgendaTitle } from '../AgendaPage.styles'
import { Button } from '../../../components/atoms'

describe('AgendaPage Page', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <AgendaPage />
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
        <AgendaPage />
      </ProviderMock>
    )
    test('run handleOpenModal', () => {
      component.find(AgendaTitle).find(Button).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
