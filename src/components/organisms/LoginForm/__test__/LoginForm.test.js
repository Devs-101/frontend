import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'
import { LoginForm } from '../LoginForm'
import { LoginFormTitle } from '../LoginForm.styles'
import loginFormData from '../LoginFormData.json'
import {
  SubmitSection,
  FormActionLink,
  FormActionText
} from '../../SignUpForm/SingUpForm.styles'
import { FormField } from '../../../molecules'
import { ProviderMock } from '../../../../../__mocks__/providerMock'

describe('LoginForm organism', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <LoginForm />
      </ProviderMock>
    )
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(
      <ProviderMock>
        <LoginForm />
      </ProviderMock>
    )
    it('is expected to have title text', () => {
      expect(component.find(LoginFormTitle).text()).toBe(loginFormData.title)
    })
    it('is expected to have 2 FormField', () => {
      expect(component.find(FormField).length).toBe(loginFormData.fields.length)
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
          <LoginForm />
        </ProviderMock>
      )
      const emailInput = container.querySelector("input[name='loginFormEmail']")
      const passwordInput = container.querySelector(
        "input[name='loginFormPassword']"
      )
      // const submitButton = container.querySelector('button')

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

      // await act(async () => {
      //   fireEvent.submit(submitButton)
      // })
    })
  })
})
