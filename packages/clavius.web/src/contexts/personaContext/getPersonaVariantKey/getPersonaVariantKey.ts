import { getPersonaVariantKeyTpe } from '.'
import { personaType } from '..'

export const getPersonaVariantKey: getPersonaVariantKeyTpe = (
  item = 'DEFAULT',
) => (item === 'DEFAULT' ? item : (`PERSONA_${item}_FAN` as personaType))

export default getPersonaVariantKey
