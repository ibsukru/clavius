import { Fragment } from 'react'
import SbEditable from 'storyblok-react'

type WhatIsOnEventPropType = {
  alt: string
  src: string
}

const WhatIsOnEvent: React.FunctionComponent<WhatIsOnEventPropType> = props => {
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
