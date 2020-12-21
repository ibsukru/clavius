import React from 'react'
import { StoryBlokResponseType } from '../../contexts/storyBlokContext'

const Page: (
  DynamicComponent: React.FunctionComponent<{
    blok: object
  }>,
) => React.FunctionComponent<{
  storyBlok: StoryBlokResponseType
}> = DynamicComponent => ({ storyBlok }) => {
  const story = storyBlok.data?.story

  if (!story) {
    return <div className="notFound">Not Found</div>
  }

  const { content } = story

  return (
    <main>
      {content.body?.map(blok => {
        return <DynamicComponent blok={blok} key={blok._uid} />
      })}
    </main>
  )
}

export default Page
