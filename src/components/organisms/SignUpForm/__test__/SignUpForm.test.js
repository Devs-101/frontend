import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { SignUpForm } from '../SignUpForm'
import { FormField } from '../../../molecules/FormField'
import {
  FormTitle,
  SubmitSection,
  FormActionLink,
  FormActionText
} from '../SingUpForm.styles'

describe('SignUpForm organism', () => {
  describe('render', () => {
    const component = shallow(<SignUpForm />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('To have props', () => {
    const component = mount(<SignUpForm />)
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
})
