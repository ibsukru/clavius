import DynamicComponent from './dynamicComponent'
import { InjectStoryBlokPropType } from '..'
import Components from './dynamicComponent.components'

export type DynamicComponentType = InjectStoryBlokPropType<{}>

export { DynamicComponent as default, Components }
