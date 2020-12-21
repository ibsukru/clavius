import { personasType } from '../contexts/personaContext'
import { StoryBlokResponseType } from '../contexts/storyBlokContext'
import mapPersonas from './mapPersonas'

export type mapPersonaType = (
  storyBlokResponse?: StoryBlokResponseType,
) => personasType

export default mapPersonas
