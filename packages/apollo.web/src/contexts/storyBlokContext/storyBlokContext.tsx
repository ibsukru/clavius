import defaultsDeep from 'lodash.defaultsdeep'

import { createContext, useEffect, useState } from 'react'

import {
  StoryBlokContextProviderType,
  StoryBlokContextType,
  StoryBlokResponseType,
} from '.'

import { PersonaContextProvider, FeatureToggleContextProvider } from '..'
import mapFeatureToggles from '../../server/shared/mapFeatureToggles'
import mapPersonas from '../../server/shared/mapPersonas'

export const StoryBlokContext = createContext<StoryBlokContextType>({})

export const StoryBlokContextProvider: StoryBlokContextProviderType = ({
  children,
  ...rest
}) => {
  const [storyBlok, setStoryBlock] = useState<StoryBlokResponseType>(
    rest.storyBlok,
  )

  const value: StoryBlokContextType = {
    storyBlok,
  }

  useEffect(() => {
    const sb = window['storyblok']
    if (!sb) {
      return
    }

    sb.init()

    sb.on(['change', 'published'], event => {
      location.reload()
    })

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
      <PersonaContextProvider personas={mapPersonas(storyBlok)}>
        <FeatureToggleContextProvider
          featureToggles={mapFeatureToggles(storyBlok)}
        >
          {children}
        </FeatureToggleContextProvider>
      </PersonaContextProvider>
    </StoryBlokContext.Provider>
  )
}
