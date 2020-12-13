import { createContext, useState } from 'react'
import {
  FeatureToggleContextType,
  featureTogglesType,
  isFeature,
  sportsType,
} from '.'

export const FeatureToggleContext = createContext<FeatureToggleContextType>({
  isFeature: () => false,
  featureToggles: {} as featureTogglesType,
  setFeatures: () => {},
  persona: { favoriteSports: ['DEFAULT'] },
})

export const FeatureToggleContextProvider: React.FunctionComponent<{
  featureToggles?: featureTogglesType
}> = ({ children, ...rest }) => {
  const [featureToggles, setFeatureToggles] = useState<featureTogglesType>(
    rest.featureToggles || {},
  )

  const { PERSONA_FAVORITE_SPORTS } = featureToggles

  const favoriteSports: sportsType[] = PERSONA_FAVORITE_SPORTS?.split(',').map(
    item => item.toUpperCase() as sportsType,
  ) || ['DEFAULT']

  const value: FeatureToggleContextType = {
    featureToggles,
    isFeature: isFeature(featureToggles),
    setFeatures: features => {
      setFeatureToggles(features)
    },
    persona: {
      favoriteSports,
    },
  }

  return (
    <FeatureToggleContext.Provider value={value}>
      {children}
    </FeatureToggleContext.Provider>
  )
}
