import { EditableContentType } from 'clavius.lib/src/components'
import WhatIsOn from './whatIsOn'

export type WhatIsOnType = React.FunctionComponent<{
  title: string
  events?: Array<EditableContentType>
}>

export default WhatIsOn
