import { DynamicComponent } from '..'
import SbEditable, { SbEditableContent } from 'storyblok-react'
import { FeatureToggleContextProvider } from '../../contexts'

const Page: React.FunctionComponent<{
  content: SbEditableContent & {
    experiments: {
      tbody: { body: { value: string; _uid: string }[] }[]
      thead: { value: string }[]
    }
  }
}> = ({ content }) => {
  return (
    <FeatureToggleContextProvider
      featureToggles={content.experiments.tbody.reduce<{
        [key: string]: string
      }>((acc, item) => {
        const [experiment, variant] = item.body
        return {
          ...acc,
          [experiment.value]: variant.value,
        }
      }, {})}
    >
      <SbEditable content={content}>
        <main>
          {content.body.map(blok => {
            return <DynamicComponent blok={blok} key={blok._uid} />
          })}
        </main>
      </SbEditable>
    </FeatureToggleContextProvider>
  )
}

export default Page
