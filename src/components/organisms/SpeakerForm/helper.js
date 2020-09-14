export function serializeSpeakerFormData(speakerFormData) {
  return {
    name: speakerFormData.SpeakerFormName,
    twitter: speakerFormData.SpeakerFormTwitter,
    bio: speakerFormData.SpeakerFormBio,
    rol: speakerFormData.SpeakerFormRol,
    img: speakerFormData.SpeakerFormLogo
  }
}

export function serializeSpeakerToFormData(speakerFormData) {
  return {
    SpeakerFormName: speakerFormData.name || '',
    SpeakerFormTwitter: speakerFormData.twitter || '',
    SpeakerFormBio: speakerFormData.bio || '',
    SpeakerFormRol: speakerFormData.rol || '',
    SpeakerFormIMG: speakerFormData.img || '',
    SpeakerFormId: speakerFormData._id || ''
  }
}
