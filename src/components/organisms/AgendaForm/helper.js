export function serializeTalkFormData(talkFormData) {
  return {
    name: talkFormData.agendaFormName,
    description: talkFormData.agendaFormConference,
    initDate: talkFormData.agendaFormTime,
    durationInMinutes: talkFormData.agendaFormDuration,
    speakerId: talkFormData.agendaFormSpeakerId
  }
}

export function serializeTalkToFormData(talkFormData) {
  return {
    agendaFormId: talkFormData._id || '',
    agendaFormName: talkFormData.name || '',
    agendaFormConference: talkFormData.description || '',
    agendaFormTime: talkFormData.initDate || '',
    agendaFormDuration: talkFormData.durationInMinutes || '',
    agendaFormSpeakerId: talkFormData.speakerId._id || ''
  }
}
