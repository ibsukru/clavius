import { sportsType } from '../featureToggleContext'
import { PersonaContextProvider, PersonaContext } from './personaContext'

export type personaType =
  | 'DEFAULT'
  | 'PERSONA_BASKETBALL_FAN'
  | 'PERSONA_BOXING_FAN'
  | 'PERSONA_CYCLING_FAN'

export type personasType = {
  PERSONA_FAVORITE_SPORTS: Array<sportsType>
}

export type storyBlokComponentType =
  | 'image'
  | 'headlinePricing'
  | 'header'
  | 'title'

export type PersonaContextType = {
  personas: personasType
  favoriteSports: sportsType[]
  favoriteSport: sportsType
  key: personaType
}

export { PersonaContextProvider, PersonaContext }
