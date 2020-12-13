import { EditableContentTpe, TableBlokType } from '../../components'
import { StoryBlokContextProvider, StoryBlokContext } from './storyBlokContext'

export type storyBlokContextType = {
  [key: string]: string
}

export type StoryBlokContextType = {
  storyBlok?: StoryBlokResponseType
}

export { StoryBlokContextProvider, StoryBlokContext }

export type StoryBlokContextProviderType = React.FunctionComponent<{
  storyBlok: StoryBlokResponseType
}>

export type StoryBlokResponseType = {
  perPage: number
  total: number
  data?: {
    story: {
      content: EditableContentTpe & {
        experiments: {
          tbody: { body: { value: string; _uid: string }[] }[]
          thead: { value: string }[]
        }
        personas: TableBlokType
      }
    }
  }
}
