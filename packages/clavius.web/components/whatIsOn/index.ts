import { EditableContentTpe, InjectStoryBlok } from '..'
import { personaType } from '../../contexts/featureToggleContext'
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
