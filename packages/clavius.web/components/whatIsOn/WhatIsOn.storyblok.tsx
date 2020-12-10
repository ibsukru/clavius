import { EditableContentTpe, WithStoryBlok, EditableComponent } from '..'
import WhatIsOn from './whatIsOn'

const WhatIsOnStoryBlok: WithStoryBlok<
  typeof WhatIsOn,
  {
    title: string
    events: EditableContentTpe[]
  }
> = Component => props => {
  const { blok } = props

  return (
    <EditableComponent content={blok}>
      <Component {...{ title: blok.title, events: blok.events }} />
    </EditableComponent>
  )
}

export default WhatIsOnStoryBlok
