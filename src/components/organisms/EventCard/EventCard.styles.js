import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import breakpoint from '../../../styles/breakpoints'

export const EventCardStyled = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: fit-content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  margin: 0px;
  border-radius: 0px;

  &:hover {
    box-shadow: 0px 3px 6px #00000029;
  }

  ${breakpoint.md`
    border-radius: 5px;
    width: 300px;
    margin: 8px 8px;
  `}
`

export const EventImage = styled.figure`
  display: flex;
  flex-direction: column-reverse;
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  min-height: 150px;
  height: 200px;

  img {
    object-fit: cover;
    border-radius: 0px;
    width: 100%;
    min-height: 150px;
    height: 200px;

    ${breakpoint.md`
      border-radius: 5px 5px 0px 0px;
    `}
  }
`

export const EventTitle = styled.h3`
  display: flex;
  height: 35px;
  background-color: ${colors.primary};
  width: 100%;
  align-items: center;
  padding-left: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.white};
`
export const EventDescription = styled.p`
  margin: 20px 20px 0px;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
`
export const EventFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 20px 0px;
  font-family: 'Work Sans', sans-serif;
`
export const EventAttendeeCounter = styled.p`
  padding: 0px 20px;
  display: flex;
`
export const EventDate = styled.p`
  padding: 0px 20px;
  display: flex;
`

export const EventLaunched = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.isLaunched ? '#d4edda' : '#cce5ff')};
  padding: 5px;
  justify-content: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`
