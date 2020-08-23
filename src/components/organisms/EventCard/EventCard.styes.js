import styled from 'styled-components'
import ConferencePlaceHolder from '../../../assets/images/ConferencePlaceHolder.jpg'

export const EventCardStyled = styled.div`
  width: 300px;
  height: fit-content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin: 8px 8px;
  box-shadow: 0px 3px 6px #00000029;
`
export const EventCardImg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  /* background-image: url(${({ url }) => url || ConferencePlaceHolder}); */
  background-image: url(${ConferencePlaceHolder});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  min-height: 150px;
  height: 200px;
`
export const EventTitle = styled.div`
  display: flex;
  position: absolute;
  height: 35px;
  background-color: black;
  width: 100%;
  align-items: center;

  h3 {
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: white;
  }
`
export const EventDescription = styled.div`
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
export const EventAttendeeCounter = styled.div`
  padding: 0px 20px;
  display: flex;
`
export const EventDate = styled.div`
  padding: 0px 20px;
  display: flex;
`
