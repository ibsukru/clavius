import { Fragment } from 'react'
import { WhatIsOnEventType } from '.'

const WhatIsOnEvent: WhatIsOnEventType = props => {
  const blok = props
  const { alt, src } = blok

  return (
    <Fragment>
      <style jsx>{`
        .whatIsOnEvent-img {
          display: block;
        }
      `}</style>
      <figure>
        <img className="whatIsOnEvent-img" src={src} alt={alt} />
      </figure>
    </Fragment>
  )
}

export default WhatIsOnEvent
