import HeadlinePricing, { HeadlinePricingPropType } from './headlinePricing'
import Headline from './headline'

export type HeadlineType = React.FunctionComponent<{
  signin: string
  logo: string
  explore: string
  bg?: string
  pricing: HeadlinePricingPropType
  title: string
}>

export default Headline

export { HeadlinePricing }
