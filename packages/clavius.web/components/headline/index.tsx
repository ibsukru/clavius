import HeadlinePricing, { HeadlinePricingPropType } from './headlinePricing'
import inject from './headline.storyblok'
import Headline from './headline'
import { AssetBlokType, InjectStoryBlok } from '..'

export type HeadlineStoryBlokType = InjectStoryBlok<
  HeadlineType,
  {
    text: string
    logo: AssetBlokType
    explore: string
    bg: AssetBlokType
    pricing: [
      {
        header: string
        footer: string
        features: string
        signup: string
      },
    ]
  }
>

export type HeadlineType = React.FunctionComponent<{
  text: string
  logo: string
  explore: string
  bg: string
  pricing: HeadlinePricingPropType
}>

export default inject(Headline)

export { HeadlinePricing }
