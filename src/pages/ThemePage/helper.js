export function serializeAttendeeFormData(attendeeFormData) {
  return {
    email: attendeeFormData.attendeeFormEmail
  }
}

export function serializeAttendeToFormData(attendeeFormData) {
  return {
    attendeeFormEmail: attendeeFormData.email || ''
  }
}
