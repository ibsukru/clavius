import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import React from 'react'

import { DynamicComponent } from '..'

const Page: React.FunctionComponent<{
  storyBlok: StoryBlokResponseType
}> = ({ storyBlok }) => {
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
