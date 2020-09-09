export function serializeTalkFormData(talkFormData) {
  return {
    name: talkFormData.agendaFormName,
    description: talkFormData.agendaFormConference,
    initDate: talkFormData.agendaFormTime,
    durationInMinutes: talkFormData.agendaFormDuration,
    speakerId: talkFormData.agendaFormSpeakerId
  }
}
