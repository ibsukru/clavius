import { WhatIsOnEventStoryBlokType } from '.'
import { EditableComponent } from 'clavius.lib/src/components'

const WhatIsOnEventStoryBlok: WhatIsOnEventStoryBlokType = Component => props => {
  const { blok } = props

  return (
    <EditableComponent content={blok}>
      <Component {...{ src: blok.img.filename, alt: blok.alt }} />
    </EditableComponent>
  )
}

export default WhatIsOnEventStoryBlok
