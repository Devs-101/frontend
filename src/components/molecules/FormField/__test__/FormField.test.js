import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { FormField } from '../FormField'
import {
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  SelectStyled
} from '../FormField.styles'

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

  describe('TextArea', () => {
    const component = mount(
      <FormField id="textID" label="Email" type="textarea" />
    )
    it('render TextArea', () => {
      expect(component.find(TextAreaStyled).length).toBe(1)
    })

    it('is expected to have properties in TextArea', () => {
      expect(component.find(TextAreaStyled).prop('name')).toBe('textID')

      expect(component.find(TextAreaStyled).prop('id')).toBe('textID')
    })
  })

  describe('Select', () => {
    const component = mount(
      <FormField
        id="textID"
        label="Email"
        type="select"
        options={[
          { label: 'label1', value: 1, id: 'Id1' },
          { label: 'label2', value: 2, id: 'Id2' }
        ]}
      />
    )
    it('render select', () => {
      expect(component.find(SelectStyled).length).toBe(1)
    })

    it('is expected to have properties in select', () => {
      expect(component.find(SelectStyled).prop('name')).toBe('textID')

      expect(component.find(SelectStyled).prop('id')).toBe('textID')
    })

    it('is expected 2 option', () => {
      expect(component.find('option').length).toBe(2)
    })
  })
})
