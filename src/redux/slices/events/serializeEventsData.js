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

export function serializeReadyForPublishEventInfo(eventInfo) {
  return {
    eventId: eventInfo.data.eventId,
    checkComplete: eventInfo.data.checkComplete
  }
}

export function serializeEventInfo(eventInfo) {
  console.log(eventInfo)
  const { data } = eventInfo
  return {
    _id: data._id,
    eventStatus: data.status || false,
    countDown: data.countDown || true,
    allowRegister: data.allowRegister || false,
    name: data.name || '',
    description: data.description || '',
    dateHour: {
      initDate: data.dateHour.initDate || null,
      endDate: data.dateHour.endDate || null
    },
    theme: data.theme || null,
    fullUrl: data.fullUrl || null,
    organizators: data.organizators || [],
    organizationId: data.organizationId || null,
    slug: data.slug || null
  }
}
