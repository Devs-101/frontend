export function serializeSignupData(userData) {
  return {
    email: userData.email,
    password: userData.password,
    confirm_password: userData.confirmPassword,
    user_name: userData.name,
    organization_name: userData.organizationName
  }
}
