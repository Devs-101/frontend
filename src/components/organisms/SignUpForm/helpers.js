export function serializeSignupFormData(signupFormData) {
  return {
    email: signupFormData.signUpFormEmail,
    password: signupFormData.signUpFormPassword,
    confirmPassword: signupFormData.signUpFormConfirmPassword,
    userName: signupFormData.signUpFormName,
    organizationName: signupFormData.signUpFormOrganization
  }
}
