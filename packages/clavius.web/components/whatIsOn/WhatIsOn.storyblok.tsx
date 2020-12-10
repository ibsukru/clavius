import { EditableContent, StoryBlokPropType, StoryPropType } from '..'
import SbEditable from 'storyblok-react'
import WhatIsOn from './whatIsOn'

type WhatIsOnStoryBlokPropType = StoryBlokPropType<{
  title: string
  events: EditableContent[]
}>

const WhatIsOnStoryBlok: React.FunctionComponent<
  StoryPropType<WhatIsOnStoryBlokPropType>
> = props => {
  const { blok } = props

  return (
    <SbEditable content={blok}>
      <WhatIsOn {...{ title: blok.title, events: blok.events }} />
    </SbEditable>
  )
}

export default WhatIsOnStoryBlok
