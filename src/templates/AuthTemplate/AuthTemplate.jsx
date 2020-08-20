import React from 'react'
import { HeaderStyled } from './AuthTemplate.styles'

export function AuthTemplate({ children }) {
  return (
    <>
      <HeaderStyled>
        <h1>oneEvent</h1>
      </HeaderStyled>
      {children}
    </>
  )
}
