import React from 'react'
import { shallow, mount } from 'enzyme'
import { render, act, fireEvent } from '@testing-library/react'
import { AgendaForm } from '../AgendaForm'
import { FormField } from '../../../molecules'
import { Title } from '../AgendaForm.styles'
import AgendaFormData from '../AgendaFormData.json'
import { Button } from '../../../atoms'

describe('AgendaForm organism', () => {
  describe('render', () => {
    const component = shallow(<AgendaForm />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })

  describe('Have to props', () => {
    const component = mount(<AgendaForm />)
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

  describe('handle submit', () => {
    test('is expeted to run submit function', async () => {
      const { container } = render(<AgendaForm />)
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
