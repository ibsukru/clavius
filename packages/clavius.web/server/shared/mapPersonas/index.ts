import { personasType } from '../../../contexts/featureToggleContext'
import { StoryBlokResponseType } from '../../../contexts/storyBlokContext'
import mapPersonas from './mapPersonas'

export type mapPersonaType = (
  storyBlokResponse?: StoryBlokResponseType,
) => personasType

export default mapPersonas
