import { SbEditableContent } from 'storyblok-react'
import { StoryBlokContextProvider, StoryBlokContext } from './storyBlokContext'

export type storyBlokContextType = {
  [key: string]: string
}

export type StoryBlokContextType = {
  storyBlok?: storyBlokType
}

export { StoryBlokContextProvider, StoryBlokContext }

export type storyBlokType = {
  perPage: number
  total: number
  data?: {
    story: {
      content: SbEditableContent & {
        experiments: {
          tbody: { body: { value: string; _uid: string }[] }[]
          thead: { value: string }[]
        }
      }
    }
  }
}
