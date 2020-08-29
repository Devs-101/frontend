import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { AuthPage } from '../AuthPage'
import { FormActionLink } from '../../../components/organisms/SignUpForm/SingUpForm.styles'
import { LoginForm, SignUpForm } from '../../../components/organisms'
import { ProviderMock } from '../../../../__mocks__/providerMock'

describe('AuthPage pages', () => {
  describe('render', () => {
    const component = shallow(
      <ProviderMock>
        <AuthPage />
      </ProviderMock>
    )
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To change the form', () => {
    const component = mount(
      <ProviderMock>
        <AuthPage />
      </ProviderMock>
    )
    it('is expected to have SignUp form', () => {
      expect(component.find(SignUpForm).length).toBe(1)
    })
    it('is expected to have component LoginForm after click', () => {
      component.find(FormActionLink).simulate('click')
      expect(component.find(LoginForm).length).toBe(1)
    })
    it('is expected to have component SignUpForm after click', () => {
      component.find(FormActionLink).simulate('click')
      expect(component.find(SignUpForm).length).toBe(1)
    })
  })
})
