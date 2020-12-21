import HeadlinePricing, { HeadlinePricingPropType } from './headlinePricing'
import inject from './headline.storyblok'
import Headline from './headline'
import {
  AssetBlokType,
  ImageStoryBlokType,
  InjectStoryBlok,
  TableBlokType,
  TitleStoryBlokType,
} from 'clavius.lib/src/components'

export type HeadlineStoryBlokType = InjectStoryBlok<
  HeadlineType,
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

export type HeadlineType = React.FunctionComponent<{
  signin: string
  logo: string
  explore: string
  bg?: string
  pricing: HeadlinePricingPropType
  title: string
}>

export default inject(Headline)

export { HeadlinePricing }
