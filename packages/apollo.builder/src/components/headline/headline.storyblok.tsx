import getVariants from 'clavius.lib/src/getVariants'
import normalizeVariants from 'clavius.lib/src/normalizeVariants'
import usePersonaContext from 'clavius.lib/src/hooks/usePersonaContext'

import { HeadlineStoryBlokType } from '.'
import {
  EditableComponent,
  ImageStoryBlokType,
  TitleStoryBlokType,
} from 'clavius.lib/src/components'
import { HeadlinePricingPropType } from './headlinePricing'

const HeadlineStoryBlok: HeadlineStoryBlokType = Component => props => {
  const { blok } = props

  const { experiments, signin } = blok
  const variants = normalizeVariants(experiments)

  const { key: variantKey } = usePersonaContext()

  const pricingVariant = (() => {
    const pricingVariants = getVariants<HeadlinePricingPropType>(
      variants,
      'headlinePricing',
    )

    return pricingVariants[variantKey]?.[0]
  })()

  const imageVariant = (() => {
    const imageVariants = getVariants<ImageStoryBlokType>(variants, 'image')

    const items = Boolean(imageVariants[variantKey]?.[0]?.asset)
      ? imageVariants[variantKey]
      : imageVariants['DEFAULT']

    return items[0]
  })()

  const titleVariant = (() => {
    const titleVariants = getVariants<TitleStoryBlokType>(variants, 'title')
    const items = titleVariants[variantKey] || titleVariants['DEFAULT']

    return items[0]
  })()

  return (
    <EditableComponent content={blok}>
      <Component
        {...{
          text: blok.text,
          logo: blok.logo.filename,
          explore: blok.explore,
          bg: imageVariant?.asset.filename,
          pricing: pricingVariant,
          title: titleVariant?.text,
          signin,
        }}
      />
    </EditableComponent>
  )
}

export default HeadlineStoryBlok
