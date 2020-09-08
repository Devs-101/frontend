export function serializeSpeakerFormData(speakerFormData) {
  return {
    name: speakerFormData.SpeakerFormName,
    twitter: speakerFormData.SpeakerFormTwitter,
    bio: speakerFormData.SpeakerFormBio,
    rol: speakerFormData.SpeakerFormRol,
    img: speakerFormData.SpeakerFormLogo
  }
}
