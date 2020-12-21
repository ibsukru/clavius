import { AssetBlokType, InjectStoryBlok } from 'clavius.lib/src/components'
import WhatIsOnEvent from './whatIsOnEvent'
import inject from './WhatIsOnEvent.storyblok'

export type WhatIsOnEventStoryBlokType = InjectStoryBlok<
  typeof WhatIsOnEvent,
  {
    alt: string
    img: AssetBlokType
  }
>

export type WhatIsOnEventType = React.FunctionComponent<{
  alt: string
  src: string
}>

export default inject(WhatIsOnEvent)
