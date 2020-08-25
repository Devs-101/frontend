import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { FormField } from '../FormField'
import { LabelStyled, InputStyled } from '../FormField.styles'

describe('FormField molecule', () => {
  describe('render', () => {
    const component = shallow(<FormField />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('to have props', () => {
    const component = mount(
      <FormField id="textID" label="Email" type="email" />
    )
    it('is expected to have label text', () => {
      expect(component.find(LabelStyled).text()).toBe('Email')
    })
    it('is expected to have htmlFor property', () => {
      expect(component.find(LabelStyled).prop('htmlFor')).toBe('textID')
    })
    it('is expected to have properties', () => {
      expect(component.find(InputStyled).prop('name')).toBe('textID')
      expect(component.find(InputStyled).prop('id')).toBe('textID')
      expect(component.find(InputStyled).prop('type')).toBe('email')
    })
  })
})
