export function serializeEventFormData(eventFormData) {
  return {
    name: eventFormData.EventFormName,
    initDate: new Date(eventFormData.EventFormInitialDate).toISOString(),
    endDate: new Date(eventFormData.EventFormEndDate).toISOString()
  }
}
