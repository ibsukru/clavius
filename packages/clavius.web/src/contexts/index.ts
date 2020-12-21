import {
  FeatureToggleContextProvider,
  FeatureToggleContext,
} from './featureToggleContext'

import { I18nContextContextProvider, I18nContextContext } from './I18nContext'
import { PersonaContext, PersonaContextProvider } from './personaContext'
import { StoryBlokContext, StoryBlokContextProvider } from './storyBlokContext'

export type sportsType = 'CYCLING' | 'BASKETBALL' | 'BOXING' | 'DEFAULT'

export {
  FeatureToggleContext,
  FeatureToggleContextProvider,
  StoryBlokContextProvider,
  StoryBlokContext,
  I18nContextContextProvider,
  I18nContextContext,
  PersonaContextProvider,
  PersonaContext,
}
