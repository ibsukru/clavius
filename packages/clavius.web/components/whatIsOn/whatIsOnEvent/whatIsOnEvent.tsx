import { Fragment } from 'react'

const WhatIsOnEvent: React.FunctionComponent<{
  alt: string
  src: string
}> = props => {
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
