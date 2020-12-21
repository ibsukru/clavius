import inject from './howToWatch'

import { HowToWatchType } from 'apollo.lib/src/components/howToWatch'
import { HowToWatch } from 'apollo.lib/src/components'
import { TableBlokType, InjectStoryBlok } from 'clavius.lib/src/components'

export type HowToWatchStoryBlokType = InjectStoryBlok<
  HowToWatchType,
  {
    title: string
    platforms: TableBlokType
  }
>

export default inject(HowToWatch)
