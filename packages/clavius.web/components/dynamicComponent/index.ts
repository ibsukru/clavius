import DynamicComponent from './dynamicComponent'
import { InjectStoryBlokPropType } from '..'
import Components from './dynamicComponent.getComponent'

export type DynamicComponentType = InjectStoryBlokPropType<{}>

export { DynamicComponent as default, Components }
