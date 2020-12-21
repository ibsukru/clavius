import { WhatIsIncludedStoryBlokType } from '.'
import { EditableComponent } from '..'

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
