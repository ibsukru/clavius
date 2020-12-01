import { DynamicComponent } from '..'
import SbEditable from 'storyblok-react'

const Page = ({ content }) => (
  <SbEditable content={content}>
    <main>
      {content.body.map(blok => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  </SbEditable>
)

export default Page
