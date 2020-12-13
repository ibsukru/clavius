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
  item === 'DEFAULT' ? item : `PERSONA_${item}_FAN`

export type FeatureToggleContextType = {
  featureToggles: featureTogglesType
  isFeature: isFeatureType
  setFeatures: setFeaturesType
  persona: {
    favoriteSports: sportsType[]
  }
}

export { FeatureToggleContextProvider, FeatureToggleContext }
