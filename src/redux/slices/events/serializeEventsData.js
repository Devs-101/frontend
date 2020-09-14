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
    },
    description: eventInfo.description,
    img: eventInfo.img
  }
}

export function serializeReadyForPublishEventInfo(eventInfo) {
  return {
    eventId: eventInfo.data.eventId,
    checkComplete: eventInfo.data.checkComplete,
    initDate: eventInfo.data.initDate
  }
}

export function serializeUpdateEventInfo(eventInfo) {
  return {
    countDown: eventInfo.countDown || true,
    allowRegister: eventInfo.allowRegister || false,
    name: eventInfo.name || '',
    description: eventInfo.description || '',
    dateHour: {
      initDate: eventInfo.dateHour.initDate || null,
      endDate: eventInfo.dateHour.endDate || null
    },
    organizators: eventInfo.organizators || [],
    slug: eventInfo.slug || null,
    img: eventInfo.img || '',
    bannerOrHeader: {
      text: eventInfo.bannerOrHeader.text || '',
      isBanner: eventInfo.bannerOrHeader.isBanner || true,
      img: eventInfo.bannerOrHeader.img || ''
    }
  }
}

export function serializeEventInfo(eventInfo) {
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
    bannerOrHeader: {
      text: eventInfo.bannerOrHeader.text || '',
      isBanner: eventInfo.bannerOrHeader.isBanner || true,
      img: eventInfo.bannerOrHeader.img || ''
    },
    slug: data.slug || null
  }
}
