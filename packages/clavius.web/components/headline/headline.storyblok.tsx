import { HeadlineStoryBlokType } from '.'
import { AssetBlokType, InjectStoryBlok, EditableComponent } from '..'

const HeadlineStoryBlok: HeadlineStoryBlokType = Component => props => {
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
