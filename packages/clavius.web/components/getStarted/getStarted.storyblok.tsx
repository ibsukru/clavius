import React from 'react'
import { TableBlokType, WithStoryBlok, EditableComponent } from '..'
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
    <EditableComponent content={blok}>
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
    </EditableComponent>
  )
}

export default GetStartedStoryBlok
