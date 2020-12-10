import {
  EditableContent,
  StoryBlokPropType,
  WithBlokType,
  WithStoryBlok,
} from '..'
import SbEditable from 'storyblok-react'
import WhatIsOn from './whatIsOn'

const WhatIsOnStoryBlok: WithStoryBlok<
  typeof WhatIsOn,
  {
    title: string
    events: EditableContent[]
  }
> = Component => props => {
  const { blok } = props

  return (
    <SbEditable content={blok}>
      <Component {...{ title: blok.title, events: blok.events }} />
    </SbEditable>
  )
}

export default WhatIsOnStoryBlok
