import { featureTogglesType } from '../contexts/featureToggleContext'
import { StoryBlokResponseType } from '../contexts/storyBlokContext'
import mapFeatureToggles from './mapFeatureToggles'

export type mapFeatureTogglesType = (
  storyBlokResponse?: StoryBlokResponseType,
) => featureTogglesType

export default mapFeatureToggles
