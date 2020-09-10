export function serializeSponsorFormData(sponsorFormData) {
  return {
    name: sponsorFormData.SponsorFormName,
    url: sponsorFormData.SponsorFormUrl,
    img: sponsorFormData.SponsorFormLogo
  }
}

export function serializeSponsorToFormData(sponsorFormData) {
  return {
    SponsorFormName: sponsorFormData.name || '',
    SponsorFormUrl: sponsorFormData.url || '',
    SponsorFormIMG: sponsorFormData.img || '',
    SponsorFormId: sponsorFormData._id || ''
  }
}
