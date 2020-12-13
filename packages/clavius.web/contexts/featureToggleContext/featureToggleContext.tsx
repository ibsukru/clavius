import { createContext, useState } from 'react'
import {
  FeatureToggleContextType,
  featureTogglesType,
  getPersonaVariantKey,
  isFeature,
  personasType,
} from '.'

export const FeatureToggleContext = createContext<FeatureToggleContextType>({
  isFeature: () => false,
  featureToggles: {} as featureTogglesType,
  setFeatures: () => {},
  persona: {
    favoriteSports: ['DEFAULT'],
    favoriteSport: 'DEFAULT',
    key: 'DEFAULT',
  },
})

export const FeatureToggleContextProvider: React.FunctionComponent<{
  featureToggles: featureTogglesType
  personas: personasType
}> = ({ children, personas, ...rest }) => {
  const [featureToggles, setFeatureToggles] = useState<featureTogglesType>(
    rest.featureToggles || {},
  )

  const { PERSONA_FAVORITE_SPORTS: favoriteSports } = personas

  const [favoriteSport] = favoriteSports

  const value: FeatureToggleContextType = {
    featureToggles,
    isFeature: isFeature(featureToggles),
    setFeatures: features => {
      setFeatureToggles(features)
    },
    persona: {
      favoriteSports,
      favoriteSport,
      key: getPersonaVariantKey(favoriteSport),
    },
  }

  return (
    <FeatureToggleContext.Provider value={value}>
      {children}
    </FeatureToggleContext.Provider>
  )
}
