import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { SpeakerForm } from '../SpeakerForm'
import { SubmitSection } from '../SpeakerForm.styles'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('SpeakerForm Organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <SpeakerForm />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <SpeakerForm />
      </ProviderMock>
    )
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Speaker')
    })
    it('Is epected to have 5 FormField', () => {
      expect(component.find(FormField).length).toBe(5)
    })
  })

  describe('Handle open modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <SpeakerForm />
      </ProviderMock>
    )
    test('run handleOpenModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
