import React from 'react'
import { shallow, mount } from 'enzyme'
import { SpeakerCard } from '../SpeakerCard'
import { SpeakerCardStyled, SpeakerCardData } from '../SpeakerCard.styles'

describe('SpeakerCard organism', () => {
  describe('render', () => {
    const component = shallow(<SpeakerCard />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
    describe('To have props', () => {
      const component = mount(
        <SpeakerCard
          speakerName="name"
          speakerRol="rol"
          speakerBio="bio"
          speakerTwitter="twitter"
        />
      )
      it('Is expect to have speakername', () => {
        expect(component.find(SpeakerCardData).text()).toBe('name')
      })
      it('Is expect to have rol', () => {
        expect(component.find(SpeakerCardData).text()).toBe('rol')
      })
      it('Is expect to have bio', () => {
        expect(component.find(SpeakerCardData).text()).toBe('bio')
      })
      it('Is expect to have twitter', () => {
        expect(component.find(SpeakerCardData).text()).toBe('twitter')
      })
    })
  })
})
