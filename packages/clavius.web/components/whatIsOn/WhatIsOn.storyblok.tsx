import { WhatIsOnStoryBlokType } from '.'
import { EditableComponent } from '..'

const WhatIsOnStoryBlok: WhatIsOnStoryBlokType = Component => props => {
  const { blok } = props

  return (
    <EditableComponent content={blok}>
      <Component {...{ title: blok.title, events: blok.events }} />
    </EditableComponent>
  )
}

export default WhatIsOnStoryBlok
