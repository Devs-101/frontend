import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const EventCardStyled = styled.div`
  width: 300px;
  height: fit-content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  margin: 8px 8px;
  box-shadow: 0px 3px 6px #00000029;
`

export const EventImage = styled.figure`
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  min-height: 150px;
  height: 200px;

  img {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    min-height: 150px;
    height: 200px;
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
