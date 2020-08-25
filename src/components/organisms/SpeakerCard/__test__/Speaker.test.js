import React from 'react'
import { shallow, mount } from 'enzyme'
import { SpeakerCard } from '../SpeakerCard'
import {
  SpeakerName,
  SpeakerRol,
  SpeakerBio,
  SpeakerTwitter
} from '../SpeakerCard.styles'

describe('SpeakerCard organism', () => {
  describe('render', () => {
    const component = shallow(<SpeakerCard />)
    it('Is expected to be rendered', () => {
      expect(component.length).toBe(1)
    })
    describe('To have props', () => {
      const component = mount(
        <SpeakerCard
          url="url"
          speakerName="name"
          speakerRol="rol"
          speakerBio="bio"
          speakerTwitter="twitter"
        />
      )
      it('Is expect to have speakername', () => {
        expect(component.find('img').prop('src')).toBe('url')
      })
      it('Is expect to have speakername', () => {
        expect(component.find(SpeakerName).text()).toBe('name')
      })
      it('Is expect to have rol', () => {
        expect(component.find(SpeakerRol).text()).toBe('rol')
      })
      it('Is expect to have bio', () => {
        expect(component.find(SpeakerBio).text()).toBe('bio')
      })
      it('Is expect to have twitter', () => {
        expect(component.find(SpeakerTwitter).text()).toBe('twitter')
      })
    })
  })
})
