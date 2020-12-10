import {
  assetType,
  StoryBlokPropType,
  WithStoryBlok,
  EditableComponent,
} from '..'

import Headline from './headline'

type HeadlineStoryBlokPropType = StoryBlokPropType<{
  text: string
  logo: assetType
  explore: string
  bg: assetType
  pricing: [
    {
      header: string
      footer: string
      features: string
      signup: string
    },
  ]
}>

const HeadlineStoryBlok: WithStoryBlok<
  typeof Headline,
  HeadlineStoryBlokPropType
> = Component => props => {
  const { blok } = props

  return (
    <EditableComponent content={blok}>
      <Component
        {...{
          text: blok.text,
          logo: blok.logo.filename,
          explore: blok.explore,
          bg: blok.bg.filename,
          pricing: blok.pricing[0],
        }}
      />
    </EditableComponent>
  )
}

export default HeadlineStoryBlok
