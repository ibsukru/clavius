import { EditableContentType } from 'clavius.lib/src/components'
import WhatIsOn from './whatIsOn'

export type WhatIsOnType = React.FunctionComponent<{
  title: string
  events?: Array<{ _uid: string; alt: string; img: { filename: string } }>
}>

export default WhatIsOn
