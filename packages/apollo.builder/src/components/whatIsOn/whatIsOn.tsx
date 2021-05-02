import { usePersonaContext } from 'clavius.lib/src/hooks'
import { WhatIsOnStoryBlokType } from '.'
import { EditableComponent } from 'clavius.lib/src/components'

const WhatIsOnStoryBlok: WhatIsOnStoryBlokType = Component => props => {
  const { blok } = props

  const { key } = usePersonaContext()

  const { persona } = blok

  if (!persona?.includes(key)) return null

  return (
    <EditableComponent content={blok}>
      <Component {...{ title: blok.title, events: blok.events }} />
    </EditableComponent>
  )
}

export default WhatIsOnStoryBlok
