import React from 'react'
import SbEditable, { SbEditableContent } from 'storyblok-react'
import Markdown from 'react-markdown'
import {
  StoryBlokComponent,
  StoryBlokPropType,
  TableBlokType,
  WithBlokType,
  WithStoryBlok,
} from '..'
import GetStarted from './getStarted'

type GetStartedStoryBlokPropType = {
  title: string
  steps: TableBlokType
}

const GetStartedStoryBlok: WithStoryBlok<
  typeof GetStarted,
  GetStartedStoryBlokPropType
> = Component => props => {
  const { blok } = props

  const { steps, title } = blok
  const { tbody } = steps

  return (
    <SbEditable content={blok}>
      <Component
        {...{
          title,
          steps: tbody.reduce<{ title: string; description: string }[]>(
            (acc, item) => {
              const [title, description] = item.body
              return acc.concat({
                title: title.value,
                description: description.value,
              })
            },
            [],
          ),
        }}
      />
    </SbEditable>
  )
}

export default GetStartedStoryBlok
