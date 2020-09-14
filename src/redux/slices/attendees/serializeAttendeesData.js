export function serializeGetAllAttendeesResponseData(
  getAllAttendeesResponseData
) {
  const { data } = getAllAttendeesResponseData
  const byId = data.reduce((all, attendee) => {
    all[attendee._id] = attendee
    return all
  }, {})

  return byId
}

export function serializeCreateAttendeeInfo(attendeeInfo) {
  return {
    email: attendeeInfo.email
  }
}
