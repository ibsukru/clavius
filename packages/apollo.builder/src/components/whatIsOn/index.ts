import { personaType } from 'clavius.lib/src/contexts/personaContext'
import {
  EditableContentType,
  InjectStoryBlok,
} from 'clavius.lib/src/components'
import WhatIsOn, { WhatIsOnType } from 'apollo.lib/src/components/whatIsOn'
import inject from './WhatIsOn'

export type WhatIsOnStoryBlokType = InjectStoryBlok<
  WhatIsOnType,
  {
    title: string
    events?: EditableContentType[]
    personas?: personaType[]
  }
>

export default inject(WhatIsOn)
