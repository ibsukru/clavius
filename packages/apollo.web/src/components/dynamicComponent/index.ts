import DynamicComponent from './dynamicComponent'
import Components from './dynamicComponent.components'

import { InjectStoryBlokPropType } from 'clavius.lib/src/components'

export type DynamicComponentType = InjectStoryBlokPropType<{}>

export { DynamicComponent as default, Components }
