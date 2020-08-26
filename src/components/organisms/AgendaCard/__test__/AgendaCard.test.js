import React from 'react'
import { shallow, mount } from 'enzyme'
import { AgendaCard } from '../AgendaCard'
import { AgendaCardDate, AgendaCardTitle } from '../AgendaCard.styles'

describe('AgendaCard organism', () => {
  describe('render', () => {
    const component = shallow(<AgendaCard />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
    describe('To have props', () => {
      const component = mount(
        <AgendaCard
          avatar="img"
          date="date"
          title="title"
          description="description"
        />
      )
      it('Is expect to have image', () => {
        expect(component.find('img').prop('src')).toBe('img')
      })
      it('Is expect to have title', () => {
        expect(component.find(AgendaCardTitle).text()).toBe('title')
      })
      it('Is expect to have date', () => {
        expect(component.find(AgendaCardDate).text()).toBe('date')
      })
      it('Is expect to have description', () => {
        expect(component.find('p').text()).toBe('description')
      })
    })
  })
})
