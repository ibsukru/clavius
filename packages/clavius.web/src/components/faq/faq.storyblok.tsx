import { FaqStoryBlokType } from '.'
import { EditableComponent } from '..'

const FaqStoryBlok: FaqStoryBlokType = Component => ({ blok }) => {
  return (
    <EditableComponent content={blok}>
      <Component {...{ ...blok }} />
    </EditableComponent>
  )
}

export default FaqStoryBlok
