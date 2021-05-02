import { personaType } from 'clavius.lib/src/contexts/personaContext'
import {
  EditableContentType,
  InjectStoryBlok,
} from 'clavius.lib/src/components'
import WhatIsOn, { WhatIsOnType } from 'apollo.lib/src/components/whatIsOn'
import inject from './whatIsOn'

export type WhatIsOnStoryBlokType = InjectStoryBlok<
  WhatIsOnType,
  {
    title: string
    events?: Array<{ _uid: string; alt: string; img: { filename: string } }>
    personas?: personaType[]
  }
>

export default inject(WhatIsOn)
