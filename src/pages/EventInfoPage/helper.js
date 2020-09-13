export function serializeEventFormData(eventFormData) {
  return {
    eventStatus: eventFormData.status || false,
    countDown: eventFormData.DetailsFormCountdown || false,
    allowRegister: eventFormData.DetailsFormAllowRegister || false,
    name: eventFormData.DetailsFormName || '',
    description: eventFormData.DetailsFormDescription || '',
    dateHour: {
      initDate: eventFormData.DetailsFormInitialDate || null,
      endDate: eventFormData.DetailsFormEndDate || null
    },
    theme: eventFormData.theme || null,
    organizators: eventFormData.organizators || [],
    organizationId: eventFormData.organizationId || null,
    slug: eventFormData.slug || null,
    bannerOrHeader: {
      isBanner: true,
      text: eventFormData.DetailsFormBannerTitle,
      img: ''
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
      DetailsFormEndDate: parseDateToString(eventData.dateHour.endDate)
    }
  }
  return {}
}
