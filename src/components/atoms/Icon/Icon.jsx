import React from 'react'

export function Icon({ className, color, size }) {
  return <i className={className} style={{ color, fontSize: size }} />
}
