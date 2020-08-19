import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { AuthPage } from '../AuthPage'
import { AuthTemplate } from '../../../templates'
import { AuthStyled, AuthFormStyled, AuthTextStyled } from '../AuthPage.styles'

describe('AuthPage pages', () => {
  describe('render', () => {
    const component = shallow(<AuthPage />)
    it('is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
  })
  // describe('To have props', () => {
  //   const component = mount(<AuthStyled />)
  //   it('is expected to have title text', () => {
  //     expect(component.find('h1').text()).toBe(
  //       'We make your plans come true! conect with your audience'
  //     )
  //   })
  //   it('is expected to have paragraf text', () => {
  //     expect(component.find('p').text()).toBe('')
  //   })
  // })
})
