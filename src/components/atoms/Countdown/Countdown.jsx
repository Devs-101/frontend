import React from 'react'
import { CountdownStyled } from './Countdown.styles'

export function Countdown({ initDate }) {
  const calculateTimeLeft = () => {
    let year = new Date(initDate).getFullYear()
    let difference = +new Date(initDate) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())
  const [year] = React.useState(new Date(initDate).getFullYear())

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <CountdownStyled>
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
    </CountdownStyled>
  )
}
