import React from 'react'

export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
