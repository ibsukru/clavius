import SbEditable from 'storyblok-react'
import { assetType, WithStoryBlok } from '../..'
import WhatIsOnEvent from './whatIsOnEvent'

const WhatIsOnEventStoryBlok: WithStoryBlok<
  typeof WhatIsOnEvent,
  {
    alt: string
    img: assetType
  }
> = Component => props => {
  const { blok } = props

  return (
    <SbEditable content={blok}>
      <Component {...{ src: blok.img.filename, alt: blok.alt }} />
    </SbEditable>
  )
}

export default WhatIsOnEventStoryBlok
