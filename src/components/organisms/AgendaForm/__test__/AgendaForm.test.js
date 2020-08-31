import React from 'react'
import { shallow, mount } from 'enzyme'
import { render, act, fireEvent } from '@testing-library/react'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { AgendaForm } from '../AgendaForm'
import { FormField } from '../../../molecules'
import { Title, SubmitSection } from '../AgendaForm.styles'
import AgendaFormData from '../AgendaFormData.json'
import { Button } from '../../../atoms'

describe('AgendaForm organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <AgendaForm />
      </ProviderMock>
    )
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })

  describe('Have to props', () => {
    const component = mount(
      <ProviderMock>
        <AgendaForm />
      </ProviderMock>
    )
    it('Is espected to button cancel', () => {
      expect(component.find(Button).at(0).text()).toBe(
        AgendaFormData.buttonCancel
      )
    })

    it('Is espected to button save', () => {
      expect(component.find(Button).at(1).text()).toBe(
        AgendaFormData.buttonSave
      )
    })

    it('Is espected to title', () => {
      expect(component.find(Title).text()).toBe(AgendaFormData.title)
    })

    it('Is expected 3 FormField', () => {
      expect(component.find(FormField).length).toBe(3)
    })
  })

  describe('Handle close modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <AgendaForm />
      </ProviderMock>
    )
    test('run handleCloseModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })

  describe('handle submit', () => {
    test('is expeted to run submit function', async () => {
      const { container } = render(
        <ProviderMock>
          <AgendaForm />
        </ProviderMock>
      )
      const agendaFormName = container.querySelector(
        "input[name='agendaFormName']"
      )
      const agendaFormTime = container.querySelector(
        "input[name='agendaFormTime']"
      )
      const agendaFormConference = container.querySelector(
        "textarea[name='agendaFormConference']"
      )
      const submitButton = container.querySelector('button[type="submit"]')

      fireEvent.input(agendaFormName, {
        target: {
          value: 'name'
        }
      })
      fireEvent.input(agendaFormTime, {
        target: {
          value: 'time'
        }
      })
      fireEvent.change(agendaFormConference, {
        target: {
          value: 'email'
        }
      })

      await act(async () => {
        fireEvent.submit(submitButton)
      })
    })
  })
})
