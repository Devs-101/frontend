export function serializeGetAllTalksResponseData(getAllTalksResponseData) {
  const { data } = getAllTalksResponseData
  const byId = data.reduce((all, talk) => {
    all[talk._id] = talk
    return all
  }, {})

  return byId
}

export function serializeCreateTalkInfo(talkInfo) {
  return {
    name: talkInfo.name || '',
    description: talkInfo.description || '',
    initDate: talkInfo.initDate || '',
    durationInMinutes: talkInfo.durationInMinutes || '',
    speakerId: talkInfo.speakerId || ''
  }
}