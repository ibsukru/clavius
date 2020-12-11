import { DynamicComponent } from '..'
import { FeatureToggleContextProvider } from '../../contexts'
import React from 'react'
import { useStoryBlokContext } from '../../hooks'
import { EditableComponent } from '..'
import mapFeatureToggles from './mapFeatureToggles'

const Page = () => {
  const { storyBlok } = useStoryBlokContext()

  const story = storyBlok?.data?.story

  if (!story) {
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
    <FeatureToggleContextProvider featureToggles={mapFeatureToggles(storyBlok)}>
      <EditableComponent content={content}>
        <main>
          {content.body?.map(blok => {
            return <DynamicComponent blok={blok} key={blok._uid} />
          })}
        </main>
      </EditableComponent>
    </FeatureToggleContextProvider>
  )
}

export default Page
