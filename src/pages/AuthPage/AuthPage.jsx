import React, { useState } from 'react'
import { LoginForm, SignUpForm } from '../../components/organisms'
import { AuthTemplate } from '../../templates'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)

  function handleFormChange() {
    setIsLogin(!isLogin)
  }

  return (
    <AuthTemplate>
      <div className="AuthTemplate">
        <div className="AuthTemplate__text">
          <h1>We make your plans come true! conect with your audience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quasi culpa labore eveniet quo, iste dolorum velit blanditiis
            adipisci voluptas maiores et, doloremque aspernatur quibusdam nemo
            nisi! Eaque, voluptates rerum.
          </p>
        </div>
        <div className="AuthTemplate__form">
          {isLogin ? (
            <LoginForm onFormChange={handleFormChange} />
          ) : (
            <SignUpForm onFormChange={handleFormChange} />
          )}
        </div>
      </div>
    </AuthTemplate>
  )
}
