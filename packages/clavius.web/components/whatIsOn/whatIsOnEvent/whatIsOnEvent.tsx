import SbEditable from 'storyblok-react'

const WhatIsOnEvent = props => {
  const { blok } = props
  const {
    alt,
    img: { filename },
  } = blok

  return (
    <SbEditable content={blok}>
      <style jsx>{`
        .whatIsOnEvent-img {
          display: block;
        }
      `}</style>
      <figure>
        <img className="whatIsOnEvent-img" src={filename} alt={alt} />
      </figure>
    </SbEditable>
  )
}

export default WhatIsOnEvent
