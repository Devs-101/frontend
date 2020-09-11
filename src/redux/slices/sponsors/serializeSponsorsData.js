export function serializeGetAllSponsorsResponseData(
  getAllSponsorsResponseData
) {
  const { data } = getAllSponsorsResponseData
  const byId = data.reduce((all, sponsor) => {
    all[sponsor._id] = sponsor
    return all
  }, {})

  return byId
}

export function serializeCreateSponsorInfo(sponsorInfo) {
  return {
    name: sponsorInfo.name || '',
    url: sponsorInfo.url || '',
    img: sponsorInfo.img || ''
  }
}
