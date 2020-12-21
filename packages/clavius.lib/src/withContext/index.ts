import { StoryBlokResponseType } from 'apollo.web/src/contexts/storyBlokContext'
import withContext from './withContext'

export type withContextPayloadType = {
  storyBlok?: StoryBlokResponseType
  locale?: string
}

export type withContextType = {
  get: () => withContextPayloadType
  set: (payload: withContextPayloadType) => void
}

export default withContext
