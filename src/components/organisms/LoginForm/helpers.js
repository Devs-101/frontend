export function serializeLoginFormData(loginFormData) {
  return {
    email: loginFormData.loginFormEmail,
    password: loginFormData.loginFormPassword
  }
}
