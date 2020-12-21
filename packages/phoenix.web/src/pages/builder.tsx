import { useStoryBlokContext } from 'clavius.web/src/hooks'
import { StoryBlokContextProvider } from 'clavius.web/src/contexts'
import React from 'react'

import { EditableComponent } from '../components'
import { Page } from 'clavius.web/src/components'

const Builder = () => {
  const { storyBlok } = useStoryBlokContext()

  const story = storyBlok?.data?.story

  if (!storyBlok || !story) {
    return (
      <div className="notFound">
        <style jsx>{`
          .notFound {
            position: relative;
            height: 100vh;
          }

          .notFound-hint {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
        <div className="notFound-hint">
          <h1>IS THIS PAGE NEW?</h1>
          <br />
          You can start adding components or copy from existing ones
        </div>
      </div>
    )
  }

  const { content } = story

  return (
    <EditableComponent content={content}>
      <StoryBlokContextProvider storyBlok={storyBlok}>
        <Page storyBlok={storyBlok} />
      </StoryBlokContextProvider>
    </EditableComponent>
  )
}

export default Builder
