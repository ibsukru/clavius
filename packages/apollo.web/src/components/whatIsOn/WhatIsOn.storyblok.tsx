import { WhatIsOnStoryBlokType } from '.'
import { EditableComponent } from '..'
import { usePersonaContext } from '../../hooks'

const WhatIsOnStoryBlok: WhatIsOnStoryBlokType = Component => props => {
  const { blok } = props

  const { key } = usePersonaContext()

  const { personas } = blok

  if (!personas?.includes(key)) return null

  return (
    <EditableComponent content={blok}>
      <Component {...{ title: blok.title, events: blok.events }} />
    </EditableComponent>
  )
}

export default WhatIsOnStoryBlok
