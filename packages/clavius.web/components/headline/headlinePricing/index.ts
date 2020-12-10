import HeadlinePricing from './headlinePricing'

export type HeadlinePricingPropType = {
  header: string
  footer: string
  features: string
  signup: string
}

export type HeadlinePricingType = React.FunctionComponent<HeadlinePricingPropType>

export default HeadlinePricing
