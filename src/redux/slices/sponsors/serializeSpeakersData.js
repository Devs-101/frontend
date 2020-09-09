export function serializeGetAllSpeakersResponseData(
  getAllSpeakersResponseData
) {
  const { data } = getAllSpeakersResponseData
  const byId = data.reduce((all, speaker) => {
    all[speaker._id] = speaker
    return all
  }, {})

  return byId
}

export function serializeCreateSpeakerInfo(speakerInfo) {
  return {
    name: speakerInfo.name || '',
    twitter: speakerInfo.twitter || '',
    bio: speakerInfo.bio || '',
    rol: speakerInfo.rol || '',
    img: speakerInfo.img || ''
  }
}
