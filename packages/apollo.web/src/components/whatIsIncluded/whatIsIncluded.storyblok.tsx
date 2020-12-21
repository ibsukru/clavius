import { WhatIsIncludedStoryBlokType } from '.'
import { EditableComponent } from 'clavius.lib/src/components'

const WhatIsIncludedStoryBlok: WhatIsIncludedStoryBlokType = Component => ({
  blok,
}) => {
  return (
    <EditableComponent content={blok}>
      <Component {...{ ...blok }} />
    </EditableComponent>
  )
}

export default WhatIsIncludedStoryBlok
