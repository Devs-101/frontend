import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '../Button'

describe('Button atom', () => {
  describe('render', () => {
    const component = shallow(<Button />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  describe('behavior', () => {
    const onClick = jest.fn()
    const component = mount(<Button onClick={onClick}>Login</Button>)
    it('is expected to have Login text', () => {
      expect(component.text()).toBe('Login')
    })
    it('is expected to execute onClick function', () => {
      component.simulate('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
