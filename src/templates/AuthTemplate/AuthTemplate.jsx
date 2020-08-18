import React from 'react'

export function AuthTemplate({ children }) {
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
    </>
  )
}
