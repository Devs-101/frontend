import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProviderMock, mockStore } from '../../../../../__mocks__/providerMock'
import { render, act, fireEvent } from '@testing-library/react'
import { SponsorForm } from '../SponsorForm'
import { SubmitSection } from '../SponsorForm.styles'
import { FormField } from '../../../molecules'
import { Button } from '../../../atoms'

describe('SponsorForm Organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <SponsorForm />
      </ProviderMock>
    )
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <SponsorForm />
      </ProviderMock>
    )
    it('Is epected to have 2 Button', () => {
      expect(component.find(Button).length).toBe(2)
    })
    it('Is epected to have title text', () => {
      expect(component.find('h2').text()).toBe('Sponsor')
    })
    it('Is epected to have 3 FormField', () => {
      expect(component.find(FormField).length).toBe(2)
    })
  })

  describe('handle submit', () => {
    test('is expeted to run submit function', async () => {
      const { container } = render(
        <ProviderMock>
          <SponsorForm />
        </ProviderMock>
      )
      const nameImput = container.querySelector("input[name='SponsorFormName']")
      const webUrlInput = container.querySelector(
        "input[name='SponsorFormUrl']"
      )
      const submitButton = container.querySelector('button[type="submit"]')

      fireEvent.input(nameImput, {
        target: {
          value: 'name'
        }
      })
      fireEvent.input(webUrlInput, {
        target: {
          value: 'WebUrl'
        }
      })

      await act(async () => {
        fireEvent.submit(submitButton)
      })
    })
  })

  describe('Handle open modal', () => {
    mockStore.dispatch = jest.fn()
    const component = mount(
      <ProviderMock>
        <SponsorForm />
      </ProviderMock>
    )
    test('run handleOpenModal', () => {
      component.find(SubmitSection).find(Button).at(0).simulate('click')
      expect(mockStore.dispatch).toHaveBeenCalled()
    })
  })
})
