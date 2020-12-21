import { InjectStoryBlok } from 'clavius.lib/src/components'
import WhatIsIncluded, {
  WhatIsIncludedType,
} from 'apollo.lib/src/components/whatIsIncluded'
import inject from './whatIsIncluded'

export type WhatIsIncludedStoryBlokType = InjectStoryBlok<
  WhatIsIncludedType,
  {
    title: string
    subtitle: string
    features: string
    signup: string
  }
>

export default inject(WhatIsIncluded)
