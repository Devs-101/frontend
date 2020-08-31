import React from 'react'
import { mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../__mocks__/providerMock'
import { SpeakerPage } from '../SpeakerPage'
import { SpeakerTitle } from '../SpeakerPage.styles'
import { Button } from '../../../components/atoms'

describe('SpeakerPage Page', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <SpeakerPage />
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
        <SpeakerPage />
      </ProviderMock>
    )
    test('run handleCloseModal', () => {
      component.find(SpeakerTitle).find(Button).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
