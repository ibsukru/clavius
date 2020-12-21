import { personaType } from 'clavius.lib/src/contexts/personaContext'
import {
  EditableContentType,
  InjectStoryBlok,
} from 'clavius.lib/src/components'
import WhatIsOn from './whatIsOn'
import inject from './WhatIsOn.storyblok'

export type WhatIsOnType = React.FunctionComponent<{
  title: string
  events?: Array<EditableContentType>
}>

export type WhatIsOnStoryBlokType = InjectStoryBlok<
  WhatIsOnType,
  {
    title: string
    events?: EditableContentType[]
    personas?: personaType[]
  }
>

export default inject(WhatIsOn)
