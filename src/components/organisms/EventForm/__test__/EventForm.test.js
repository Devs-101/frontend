import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { EventForm } from '../EventForm'
import { SubmitSection } from '../EventForm.styles'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('EventForm Organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Event')
    })
    it('Is epected to have 3 FormField', () => {
      expect(component.find(FormField).length).toBe(3)
    })
  })
  describe('Handle close modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <EventForm />
      </ProviderMock>
    )
    test('run handleCloseModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
