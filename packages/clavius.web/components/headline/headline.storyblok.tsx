import { AssetBlokType, InjectStoryBlok, EditableComponent } from '..'

import Headline from './headline'

const HeadlineStoryBlok: InjectStoryBlok<
  typeof Headline,
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
