import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { render, act, fireEvent } from '@testing-library/react'
import { SignUpForm } from '../SignUpForm'
import { FormField } from '../../../molecules/FormField'
import {
  FormTitle,
  SubmitSection,
  FormActionLink,
  FormActionText
} from '../SingUpForm.styles'
import { ProviderMock } from '../../../../../__mocks__/providerMock'

describe('SignUpForm organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <SignUpForm />
      </ProviderMock>
    )
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <SignUpForm />
      </ProviderMock>
    )
    it('is expected to have title text', () => {
      expect(component.find(FormTitle).text()).toBe(
        'A couple of clicks separate us from creating great events'
      )
    })
    it('is expected to have 5 FormField', () => {
      expect(component.find(FormField).length).toBe(5)
    })
    it('is expected to have SubmitSection', () => {
      expect(component.find(SubmitSection).length).toBe(1)
    })
    it('is expected to have FormActionText', () => {
      expect(component.find(FormActionText).length).toBe(1)
    })
    it('is expected to have FormActionLink', () => {
      expect(component.find(FormActionLink).length).toBe(1)
    })
  })
  describe('handle submit', () => {
    test('is expeted to run submit function', async () => {
      const { container } = render(
        <ProviderMock>
          <SignUpForm />
        </ProviderMock>
      )
      const nameInput = container.querySelector("input[name='signUpFormName']")
      const organizationInput = container.querySelector(
        "input[name='signUpFormOrganization']"
      )
      const emailInput = container.querySelector(
        "input[name='signUpFormEmail']"
      )
      const passwordInput = container.querySelector(
        "input[name='signUpFormPassword']"
      )
      const confirmPasswordInput = container.querySelector(
        "input[name='signUpFormConfirmPassword']"
      )
      const submitButton = container.querySelector('button')

      fireEvent.input(nameInput, {
        target: {
          value: 'name'
        }
      })
      fireEvent.input(organizationInput, {
        target: {
          value: 'organization'
        }
      })
      fireEvent.input(emailInput, {
        target: {
          value: 'email'
        }
      })
      fireEvent.input(passwordInput, {
        target: {
          value: 'password'
        }
      })
      fireEvent.input(confirmPasswordInput, {
        target: {
          value: 'password'
        }
      })

      await act(async () => {
        fireEvent.submit(submitButton)
      })
    })
  })
})
