import React, { useState } from 'react'
import { LoginForm, SignUpForm } from '../../components/organisms'
import { AuthTemplate } from '../../templates'
import Logo from '../../assets/images/devs101.png'
import { AuthStyled, AuthTextStyled, AuthFormStyled } from './AuthPage.styles'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)

  function handleFormChange() {
    setIsLogin(!isLogin)
  }

  return (
    <AuthTemplate>
      <AuthStyled>
        <AuthTextStyled>
          <figure>
            <img src={Logo} alt="" />
          </figure>
          <h1>We make your plans come true! conect with your audience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quasi culpa labore eveniet quo, iste dolorum velit blanditiis
            adipisci voluptas maiores et, doloremque aspernatur quibusdam nemo
            nisi! Eaque, voluptates rerum.
          </p>
        </AuthTextStyled>
        <AuthFormStyled className="AuthTemplate__form">
          {isLogin ? (
            <LoginForm onFormChange={handleFormChange} />
          ) : (
            <SignUpForm onFormChange={handleFormChange} />
          )}
        </AuthFormStyled>
      </AuthStyled>
    </AuthTemplate>
  )
}
