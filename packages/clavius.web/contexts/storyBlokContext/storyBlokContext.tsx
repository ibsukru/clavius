import { createContext, useEffect, useState } from 'react'
import { StoryBlokContextType, storyBlokType } from '.'
import defaultsDeep from 'lodash.defaultsdeep'

export const StoryBlokContext = createContext<StoryBlokContextType>({})

export const StoryBlokContextProvider: React.FunctionComponent<{
  storyBlok: storyBlokType
}> = ({ children, ...rest }) => {
  const [storyBlok, setStoryBlock] = useState<storyBlokType>(rest.storyBlok)

  const value: StoryBlokContextType = {
    storyBlok,
  }

  useEffect(() => {
    const sb = window['storyblok']

    if (!sb) {
      return
    }

    sb.init()

    sb.on(['change', 'published'], () => location.reload())

    sb.on('input', event => {
      const eventStory = event?.story
      const currentStory = storyBlok.data?.story

      if (!currentStory || !eventStory) {
        return
      }

      if (eventStory.content._uid !== currentStory.content._uid) {
        return
      }

      // not sure what this does. will check the platform
      // event.story.content = sb.addComments(
      //   event.story?.content,
      //   event.story?.id,
      // )

      setStoryBlock(defaultsDeep({ data: { story: eventStory } }, storyBlok))
    })
  }, [])

  return (
    <StoryBlokContext.Provider value={value}>
      {children}
    </StoryBlokContext.Provider>
  )
}
