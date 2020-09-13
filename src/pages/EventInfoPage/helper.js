export function serializeEventFormData(eventFormData) {
  return {
    eventStatus: eventFormData.status || false,
    countDown: eventFormData.countDown || true,
    allowRegister: eventFormData.allowRegister || false,
    name: eventFormData.name || '',
    description: eventFormData.description || '',
    dateHour: {
      initDate: eventFormData.dateHour.initDate || null,
      endDate: eventFormData.dateHour.endDate || null
    },
    theme: eventFormData.theme || null,
    fullUrl: eventFormData.fullUrl || null,
    organizators: eventFormData.organizators || [],
    organizationId: eventFormData.organizationId || null,
    slug: eventFormData.slug || null
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
