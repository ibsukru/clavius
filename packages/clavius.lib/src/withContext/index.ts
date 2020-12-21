import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import withContext from './withContext'

export type withContextPayloadType = {
  storyBlok?: StoryBlokResponseType
  locale?: string
}

export type contextAreaType = 'home' | 'help' | 'myaccount' | 'auth'

export type withContextType = {
  get: () => withContextPayloadType
  set: (
    payload: withContextPayloadType,
    keys?: {
      storyBlok: string
      locale: string
    },
  ) => void
  setLocale: (value: string) => void
  getLocale: () => string
  setStoryBlok: (payload: StoryBlokResponseType, key?: contextAreaType) => void
  getStoryBlok: (key?: contextAreaType) => StoryBlokResponseType
}

export default withContext
