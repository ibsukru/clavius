import inject from './headline'

import { Headline } from 'apollo.lib/src/components'
import HeadlinePricing, {
  HeadlinePricingPropType,
} from 'apollo.lib/src/components/headline/headlinePricing'

import {
  AssetBlokType,
  ImageStoryBlokType,
  InjectStoryBlok,
  TableBlokType,
  TitleStoryBlokType,
} from 'clavius.lib/src/components'

export type HeadlineStoryBlokType = InjectStoryBlok<
  typeof Headline,
  {
    signin: string
    logo: AssetBlokType
    explore: string
    experiments: Array<{
      key: string
      variant: Array<
        ImageStoryBlokType | HeadlinePricingPropType | TitleStoryBlokType
      >
      component: string
      config: TableBlokType
    }>
  }
>

export default inject(Headline)

export { HeadlinePricing }
