export function serializeSignupData(userData) {
  return {
    email: userData.email,
    password: userData.password,
    confirm_password: userData.confirmPassword,
    user_name: userData.userName,
    organization_name: userData.organizationName
  }
}

export function serializeSignupResponse(signupResponse) {
  return {
    jwt: signupResponse.token,
    userId: signupResponse.data._id,
    email: signupResponse.data.email,
    name: signupResponse.data.name
  }
}

export function serializeVerifyUserResponse(verifyUserResponseData) {
  return {
    userId: verifyUserResponseData.user._id,
    email: verifyUserResponseData.user.email,
    name: verifyUserResponseData.user.name
  }
}
