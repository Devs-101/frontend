import { css } from 'styled-components'
export const breakpoints = {
  xxs: 375,
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
  uw: 2560
}
export const devices = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = {
    name: label,
    styles: {
      width: `${breakpoints[label]}px`,
      height: '1000px'
    }
  }
  return acc
}, {})
const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
export default breakpoint
