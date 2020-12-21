import { personaType } from 'clavius.lib/src/contexts/personaContext'
import { EditableContentTpe, InjectStoryBlok } from '..'
import WhatIsOn from './whatIsOn'
import inject from './WhatIsOn.storyblok'

export type WhatIsOnType = React.FunctionComponent<{
  title: string
  events?: Array<EditableContentTpe>
}>

export type WhatIsOnStoryBlokType = InjectStoryBlok<
  WhatIsOnType,
  {
    title: string
    events?: EditableContentTpe[]
    personas?: personaType[]
  }
>

export default inject(WhatIsOn)
