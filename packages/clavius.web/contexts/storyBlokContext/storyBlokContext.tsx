import { createContext, useState } from 'react'
import { StoryBlokContextType, storyBlokType } from '.'

export const StoryBlokContext = createContext<StoryBlokContextType>({})

export const StoryBlokContextProvider: React.FunctionComponent<{
  storyBlok: storyBlokType
}> = ({ children, ...rest }) => {
  const [storyBlok] = useState<storyBlokType>(rest.storyBlok)

  const value: StoryBlokContextType = {
    storyBlok,
  }

  return (
    <StoryBlokContext.Provider value={value}>
      {children}
    </StoryBlokContext.Provider>
  )
}
