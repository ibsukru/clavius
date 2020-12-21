import { createContext, useState } from 'react'
import { FeatureToggleContextType, featureTogglesType, isFeature } from '.'

export const FeatureToggleContext = createContext<FeatureToggleContextType>({
  isFeature: () => false,
  featureToggles: {} as featureTogglesType,
  setFeatures: () => {},
})

export const FeatureToggleContextProvider: React.FunctionComponent<{
  featureToggles: featureTogglesType
}> = ({ children, ...rest }) => {
  const [featureToggles, setFeatureToggles] = useState<featureTogglesType>(
    rest.featureToggles || {},
  )

  const value: FeatureToggleContextType = {
    featureToggles,
    isFeature: isFeature(featureToggles),
    setFeatures: features => {
      setFeatureToggles(features)
    },
  }

  return (
    <FeatureToggleContext.Provider value={value}>
      {children}
    </FeatureToggleContext.Provider>
  )
}
