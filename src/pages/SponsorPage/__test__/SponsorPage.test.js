import React from 'react'
import { mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../__mocks__/providerMock'
import { SponsorPage } from '../SponsorPage'
import { SponsorTitle } from '../SponsorPage.styles'
import { Button } from '../../../components/atoms'

describe('SponsorPage Page', () => {
  describe('Render', () => {
    const component = mount(
      <ProviderMock>
        <SponsorPage />
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
        <SponsorPage />
      </ProviderMock>
    )
    test('run handleOpenModal', () => {
      component.find(SponsorTitle).find(Button).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
