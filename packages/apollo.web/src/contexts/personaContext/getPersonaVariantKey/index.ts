import { personaType } from '..'
import { sportsType } from '../..'
import getPersonaVariantKey from './getPersonaVariantKey'

export type getPersonaVariantKeyTpe = (item?: sportsType) => personaType

export default getPersonaVariantKey
