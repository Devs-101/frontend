import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { LoginForm } from '../LoginForm'
import { LoginFormTitle, LoginFormStyled } from '../LoginForm.styles'
import loginFormData from '../LoginFormData.json'
import {
  SubmitSection,
  FormActionLink,
  FormActionText
} from '../../SignUpForm/SingUpForm.styles'
import { FormField } from '../../../molecules'

describe('LoginForm organism', () => {
  describe('render', () => {
    const component = shallow(<LoginForm />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(<LoginForm />)
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
  describe('Submit to have been called', () => {
    const handleSubmit = jest.fn()
    const wrapper = mount(<LoginForm />).find(LoginFormStyled)
    // const component = wrapper.
  })
})
