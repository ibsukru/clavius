import { FaqStoryBlokType } from '.'
import { EditableComponent } from 'clavius.lib/src/components'

const FaqStoryBlok: FaqStoryBlokType = Component => ({ blok }) => {
  return (
    <EditableComponent content={blok}>
      <Component {...{ ...blok }} />
    </EditableComponent>
  )
}

export default FaqStoryBlok
