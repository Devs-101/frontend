import React, { useState } from 'react'
import { LoginForm, SignUpForm } from '../../components/organisms'
import { AuthTemplate } from '../../templates'
import Logo from '../../assets/images/devs101.png'
import {
  AuthStyled,
  AuthFormStyled,
  AuthIntroStyled,
  AuthTextStyled,
  ContainerStyled
} from './AuthPage.styles'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)

  function handleFormChange() {
    setIsLogin(!isLogin)
  }

  return (
    <AuthTemplate>
      <AuthStyled>
        <ContainerStyled>
          <AuthTextStyled>
            <figure>
              <img src={Logo} alt="" />
            </figure>
            <h1>We make your plans come true! connect with your audience</h1>
            <AuthIntroStyled>
              When organizing any event, it is essential to have useful and
              quality tools that allow you to easily and effectively manage each
              of the details of your organization. oneEvent is a practical
              online solution that facilitates registration management,
              management of personalized landing pages for all attendees of your
              event.
            </AuthIntroStyled>
          </AuthTextStyled>
          <AuthFormStyled>
            {isLogin ? (
              <LoginForm onFormChange={handleFormChange} />
            ) : (
              <SignUpForm onFormChange={handleFormChange} />
            )}
          </AuthFormStyled>
        </ContainerStyled>
      </AuthStyled>
    </AuthTemplate>
  )
}
