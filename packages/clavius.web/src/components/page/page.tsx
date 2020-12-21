import React from 'react'

import { StoryBlokResponseType } from '../../contexts/storyBlokContext'

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
        return <div key={blok._uid}>asdas</div>
      })}
    </main>
  )
}

export default Page
