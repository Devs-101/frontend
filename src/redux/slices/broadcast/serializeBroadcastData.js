export function serializeGetBroadcastResponseData(getBroadcastResponseData) {
  const { data } = getBroadcastResponseData

  return data
}

export function serializeUpdateBroadcastInfo(broadcastInfo) {
  return {
    subject: broadcastInfo.subject || '',
    text: broadcastInfo.text || '',
    img: broadcastInfo.img || ''
  }
}
