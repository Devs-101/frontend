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

export function serializeEventToFormData(eventData) {
  if (eventData) {
    return {
      DetailsFormName: eventData.name,
      DetailsFormUrlSlug: eventData.slug,
      DetailsFormDescription: eventData.description,
      DetailsFormInitialDate: eventData.dateHour.initDate,
      DetailsFormEndDate: eventData.dateHour.endDate
    }
  }
  return {}
}
