export function serializeEventFormData(eventFormData) {
  return {
    countDown: eventFormData.DetailsFormCountdown || false,
    allowRegister: eventFormData.DetailsFormAllowRegister || false,
    name: eventFormData.DetailsFormName || '',
    description: eventFormData.DetailsFormDescription || '',
    dateHour: {
      initDate: eventFormData.DetailsFormInitialDate || null,
      endDate: eventFormData.DetailsFormEndDate || null
    },
    img: eventFormData.DetailsFormLogo || null,
    organizators: eventFormData.organizators || [],
    slug: eventFormData.DetailsFormUrlSlug || null,
    bannerOrHeader: {
      isBanner: true,
      text: eventFormData.DetailsFormBannerTitle,
      img: eventFormData.DetailsFormBannerImg
    }
  }
}

function parseDateToString(date) {
  if (date) {
    const dateString = date.split('T')[0]
    return dateString
  }

  return null
}

export function serializeEventToFormData(eventData) {
  if (eventData) {
    return {
      DetailsFormName: eventData.name,
      DetailsFormUrlSlug: eventData.slug,
      DetailsFormDescription: eventData.description,
      DetailsFormInitialDate: parseDateToString(eventData.dateHour.initDate),
      DetailsFormEndDate: parseDateToString(eventData.dateHour.endDate),
      DetailsFormBannerTitle: eventData.bannerOrHeader.text,
      DetailsFormBannerImgURL: eventData.bannerOrHeader.img,
      DetailsFormLogoURL: eventData.img,
      DetailsFormAllowRegister: eventData.allowRegister,
      DetailsFormCountdown: eventData.countDown
    }
  }
  return {}
}
