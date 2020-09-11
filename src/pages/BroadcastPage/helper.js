export function serializeBroadcastFormData(broadcastFormData) {
  return {
    subject: broadcastFormData.broadcastFormSubjet,
    text: broadcastFormData.broadcastFormMessage,
    img: broadcastFormData.broadcastFormLogo
  }
}

export function serializeBroadcastToFormData(broadcastFormData) {
  return {
    broadcastFormSubjet: broadcastFormData.subject || '',
    broadcastFormMessage: broadcastFormData.text || '',
    BroadcastFormIMG: broadcastFormData.img || ''
  }
}
