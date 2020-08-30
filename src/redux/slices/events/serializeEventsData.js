export function serializeGetAllEventsResponseData(getAllEventsResponseData) {
  const { data } = getAllEventsResponseData
  const byId = data.reduce((all, event) => {
    all[event._id] = event
    return all
  }, {})

  return byId
}
