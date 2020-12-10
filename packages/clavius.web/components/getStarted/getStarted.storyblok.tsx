import React from 'react'
import SbEditable from 'storyblok-react'
import { TableBlokType, WithStoryBlok } from '..'
import GetStarted from './getStarted'

const GetStartedStoryBlok: WithStoryBlok<
  typeof GetStarted,
  {
    title: string
    steps: TableBlokType
  }
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
