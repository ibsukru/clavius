import SbEditable from 'storyblok-react'
import { assetType, StoryBlokPropType, StoryPropType } from '../..'
import WhatIsOnEvent from './whatIsOnEvent'

type WhatIsOnEventStoryBlokPropType = StoryBlokPropType<{
  alt: string
  img: assetType
}>

const WhatIsOnEventStoryBlok: React.FunctionComponent<
  StoryPropType<WhatIsOnEventStoryBlokPropType>
> = props => {
  const { blok } = props

  return (
    <SbEditable content={blok}>
      <WhatIsOnEvent {...{ src: blok.img.filename, alt: blok.alt }} />
    </SbEditable>
  )
}

export default WhatIsOnEventStoryBlok
