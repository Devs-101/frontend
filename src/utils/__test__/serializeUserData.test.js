import { serializeSignupData } from '../serializeUserData'

const baseSignupDataUnserialized = {
  email: 'yourname@gmail.com',
  password: '123456',
  confirmPassword: '123456',
  userName: 'Me Name Here',
  organizationName: 'Devs 101'
}

const baseSignupDataSerialized = {
  email: 'yourname@gmail.com',
  password: '123456',
  confirm_password: '123456',
  user_name: 'Me Name Here',
  organization_name: 'Devs 101'
}

describe('serializeUserData test', () => {
  describe('serializeSignupData', () => {
    it('is expected to serialize data correctly', () => {
      expect(serializeSignupData(baseSignupDataUnserialized)).toMatchObject(
        baseSignupDataSerialized
      )
    })
  })
})
