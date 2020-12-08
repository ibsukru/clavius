import { DynamicComponent } from '..'
import SbEditable from 'storyblok-react'
import { FeatureToggleContextProvider } from '../../contexts'
import React from 'react'
import { useStoryBlokContext } from '../../hooks'

const Page = () => {
  const { storyBlok } = useStoryBlokContext()

  const { story } = storyBlok.data || {}

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
    <FeatureToggleContextProvider
      featureToggles={content.experiments?.tbody?.reduce<{
        [key: string]: string
      }>((acc, item) => {
        if (!item?.body) return acc

        const [experiment, variant] = item.body
        return {
          ...acc,
          [experiment.value]: variant.value,
        }
      }, {})}
    >
      <SbEditable content={content}>
        <main>
          {content.body?.map(blok => {
            return <DynamicComponent blok={blok} key={blok._uid} />
          })}
        </main>
      </SbEditable>
    </FeatureToggleContextProvider>
  )
}

export default Page
