import React from 'react'

const listOfStatus = {
  NO_EVENT_NAME: 'NO_EVENT_NAME_INFO',
  NO_EVENT_START_DATE: 'NO_EVENT_START_DATE_INFO',
  NO_EVENT_LOGO: 'NO_EVENT_LOGO_INFO',
  NO_EVENT_BROADCAST_SUBJECT: 'NO_EVENT_BROADCAST_SUBJECT_INFO',
  NO_EVENT_BROADCAST_TEXT: 'NO_EVENT_BROADCAST_TEXT_INFO',
  NO_EVENT_BROADCAST_IMG: 'NO_EVENT_BROADCAST_IMG_INFO',
  NO_EVENT_BANNER_IMAGE: 'NO_EVENT_BANNER_IMAGE_INFO',
  NO_EVENT_HEADER_IMAGE: 'NO_EVENT_HEADER_IMAGE_INFO'
}

export function Button({ readyForPublish }) {
  return (
    <>
      {readyForPublish.map(item => (
        <p key={item}>{listOfStatus[item]}</p>
      ))}
    </>
  )
}
