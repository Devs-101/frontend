import React from 'react'
import { ErrorStyled } from './ErrorPage.styles'
import { HomeTemplate } from '../../templates'
import ErrorImg from '../../assets/images/404.png'

export function ErrorPage() {
  return (
    <HomeTemplate>
      <ErrorStyled>
        <main>
          <h1>Error 404</h1>
          <h1>ups!</h1>
          <img src={ErrorImg} alt="" />
        </main>
      </ErrorStyled>
    </HomeTemplate>
  )
}
