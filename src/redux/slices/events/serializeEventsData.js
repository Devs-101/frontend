export function serializeGetAllEventsResponseData(getAllEventsResponseData) {
  const { data } = getAllEventsResponseData
  const byId = data.reduce((all, event) => {
    all[event._id] = event
    return all
  }, {})

  return byId
}

export function serializeCreateEventInfo(eventInfo) {
  return {
    name: eventInfo.name,
    dateHour: {
      initDate: eventInfo.initDate,
      endDate: eventInfo.endDate
    }
  }
}

export function serializeEventInfo(eventInfo) {
  return {
    eventStatus: eventInfo.status || false,
    countDown: eventInfo.countDown || true,
    allowRegister: eventInfo.allowRegister || false,
    name: eventInfo.name || '',
    description: eventInfo.description || '',
    dateHour: {
      initDate: eventInfo.initDate || null,
      endDate: eventInfo.endDate || null
    },
    theme: eventInfo.theme || null,
    fullUrl: eventInfo.fullUrl || null,
    organizators: eventInfo.organizators || []
  }
}
