import { InjectStoryBlok } from '..'
import WhatIsIncluded from './whatIsIncluded'
import inject from './whatIsIncluded.storyblok'

export type WhatIsIncludedType = React.FunctionComponent<{
  title: string
  subtitle: string
  features: string
  signup: string
}>

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
