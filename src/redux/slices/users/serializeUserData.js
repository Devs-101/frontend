export function serializeSignupData(userData) {
  return {
    email: userData.email,
    password: userData.password,
    confirm_password: userData.confirmPassword,
    name: userData.userName,
    organization_name: userData.organizationName
  }
}

export function serializeSignupResponse(signupResponse) {
  const {
    data: { user, organization, token }
  } = signupResponse
  return {
    userInfo: {
      jwt: token,
      userId: user._id,
      email: user.email,
      name: user.name
    },
    organizationInfo: {
      id: organization._id,
      name: organization.name,
      slug: organization.slug
    }
  }
}

export function serializeLoginResponse(loginResponse) {
  const {
    data: { token }
  } = loginResponse

  return token
}

export function serializeVerifyUserResponse(verifyUserResponseData, token) {
  const {
    data: { user, organization }
  } = verifyUserResponseData

  return {
    userInfo: {
      jwt: token,
      userId: user._id,
      email: user.email,
      name: user.name
    },
    organizationInfo: {
      id: organization[0]._id,
      name: organization[0].name,
      slug: organization[0].slug
    }
  }
}
