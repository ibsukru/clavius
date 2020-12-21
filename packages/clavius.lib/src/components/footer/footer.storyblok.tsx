import { FooterStoryBlokType } from '.'
import { EditableComponent } from '..'

const FooterStoryBlok: FooterStoryBlokType = Component => ({ blok }) => {
  return (
    <EditableComponent content={blok}>
      <Component {...{ ...blok }} />
    </EditableComponent>
  )
}

export default FooterStoryBlok
