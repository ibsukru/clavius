import HeadlinePricing, { HeadlinePricingPropType } from './headlinePricing'
import inject from './headline.storyblok'
import Headline from './headline'

export type HeadlineType = React.FunctionComponent<{
  text: string
  logo: string
  explore: string
  bg: string
  pricing: HeadlinePricingPropType
}>

export default inject(Headline)

export { HeadlinePricing }
