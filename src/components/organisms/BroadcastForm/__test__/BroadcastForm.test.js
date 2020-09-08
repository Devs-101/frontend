import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { render, act, fireEvent } from '@testing-library/react'
import { BroadcastForm } from '../BroadcastForm'
import { SubmitSection } from '../BroadcastForm.styles'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('BroadcastForm Organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <BroadcastForm />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <BroadcastForm />
      </ProviderMock>
    )
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h3').text()).toBe('Message')
    })
    it('Is epected to have 3 FormField', () => {
      expect(component.find(FormField).length).toBe(4)
    })
  })

  describe('handle submit', () => {
    test('is expeted to run submit function', async () => {
      const { container } = render(
        <ProviderMock>
          <BroadcastForm />
        </ProviderMock>
      )
      const subjetImput = container.querySelector(
        "input[name='broadcastFormSubjet']"
      )
      const submitButton = container.querySelector('button[type="submit"]')

      fireEvent.input(subjetImput, {
        target: {
          value: 'name'
        }
      })

      await act(async () => {
        fireEvent.submit(submitButton)
      })
    })
  })

  describe('Handle close modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <BroadcastForm />
      </ProviderMock>
    )
    test('run handleCloseModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
