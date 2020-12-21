import { FaqStoryBlokType } from '.'
import { EditableComponent } from '..'

const FaqStoryBlok: FaqStoryBlokType = Component => ({ blok }) => {
  return (
    <EditableComponent content={blok}>
      <Component {...{ ...blok, key: blok._uid }} />
    </EditableComponent>
  )
}

export default FaqStoryBlok
