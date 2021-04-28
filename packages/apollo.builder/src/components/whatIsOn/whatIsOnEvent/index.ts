import inject from './whatIsOnEvent'

import { AssetBlokType, InjectStoryBlok } from 'clavius.lib/src/components'

import WhatIsOnEvent, {
  WhatIsOnEventType,
} from 'apollo.lib/src/components/whatIsOn/whatIsOnEvent'

export type WhatIsOnEventStoryBlokType = InjectStoryBlok<
  WhatIsOnEventType,
  {
    alt: string
    img: AssetBlokType
  }
>

export default inject(WhatIsOnEvent)
