import SbEditable from 'storyblok-react'
import { assetType, StoryBlokPropType, StoryPropType } from '..'
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

const HeadlineStoryBlok: React.FunctionComponent<
  StoryPropType<HeadlineStoryBlokPropType>
> = props => {
  const { blok } = props

  return (
    <SbEditable content={blok}>
      <Headline
        {...{
          text: blok.text,
          logo: blok.logo.filename,
          explore: blok.explore,
          bg: blok.bg.filename,
          pricing: blok.pricing[0],
        }}
      />
    </SbEditable>
  )
}

export default HeadlineStoryBlok
