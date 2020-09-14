import React from 'react'

const listOfStatus = {
  NO_EVENT_NAME: 'The event must have a Name.',
  NO_EVENT_START_DATE: 'The event must have a start date.',
  NO_EVENT_LOGO: 'The event must have a image.',
  NO_EVENT_BROADCAST_SUBJECT: 'The broadcast must have a subject.',
  NO_EVENT_BROADCAST_TEXT: 'The broadcast must have a Message.',
  NO_EVENT_BROADCAST_IMG: 'The Broadcast must have a Image.',
  NO_EVENT_BANNER_IMAGE: 'The event must have a banner or header image.',
  NO_EVENT_HEADER_IMAGE: 'The event must have a header or banner image.'
}

export function List({ readyForPublish }) {
  return (
    <>
      {readyForPublish.map(item => (
        <p key={item}>{listOfStatus[item]}</p>
      ))}
    </>
  )
}
