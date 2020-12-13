import {
  FeatureToggleContextProvider,
  FeatureToggleContext,
} from './featureToggleContext'

export type isFeatureType = (toggles: togglesType) => boolean
export type setFeaturesType = (toggles: featureTogglesType) => void

export type featureTogglesType = {
  [key: string]: string
}

export type togglesType = featureTogglesType | featureTogglesType[]

export type personaType =
  | 'DEFAULT'
  | 'PERSONA_BASKETBALL_FAN'
  | 'PERSONA_BOXING_FAN'
  | 'PERSONA_CYCLING_FAN'

export type personasType = {
  PERSONA_FAVORITE_SPORTS: Array<sportsType>
}

export const isFeature: (
  toggles: featureTogglesType,
) => isFeatureType = features => (
  payload: featureTogglesType | featureTogglesType[],
) => {
  const toggles = payload instanceof Array ? payload : [payload]

  return toggles.some(toggle =>
    Object.entries(toggle).every(([key, value]) => features[key] === value),
  )
}

export type sportsType = 'CYCLING' | 'BASKETBALL' | 'BOXING' | 'DEFAULT'

export type storyBlokComponentType =
  | 'image'
  | 'headlinePricing'
  | 'header'
  | 'title'

export const getPersonaVariantKey = (item: sportsType = 'DEFAULT') =>
  item === 'DEFAULT' ? item : (`PERSONA_${item}_FAN` as personaType)

export type FeatureToggleContextType = {
  featureToggles: featureTogglesType
  isFeature: isFeatureType
  setFeatures: setFeaturesType
  personas?: personasType
  persona: {
    favoriteSports: sportsType[]
    favoriteSport: sportsType
    key: personaType
  }
}

export { FeatureToggleContextProvider, FeatureToggleContext }
